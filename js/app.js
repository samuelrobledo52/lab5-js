const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

let apiPosts = [];
let localPosts = JSON.parse(localStorage.getItem("localPosts")) || [];

function saveLocalPosts() {
    localStorage.setItem("localPosts", JSON.stringify(localPosts));
}

function getAllPosts() {
    return [...localPosts, ...apiPosts];
}

function renderPosts(posts) {
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const article = document.createElement("article");
        article.className = "post";

        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        postsContainer.appendChild(article);
    });
}

async function loadPosts() {
    postsContainer.innerHTML = "";
    showState("loading");

    try {
        apiPosts = await getPosts();

        const allPosts = getAllPosts();

        if (allPosts.length === 0) {
            showState("empty");
            return;
        }

        showState("idle");
        renderPosts(allPosts);
    } catch (error) {
        showState("error");
    }
}

async function searchPosts() {
    const query = searchInput.value.trim().toLowerCase();

    postsContainer.innerHTML = "";

    if (query === "") {
        loadPosts();
        return;
    }

    showState("loading");

    try {
        const searchedApiPosts = await searchPostsAPI(query);

        const filteredLocalPosts = localPosts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.body.toLowerCase().includes(query)
        );

        const allResults = [...filteredLocalPosts, ...searchedApiPosts];

        if (allResults.length === 0) {
            showState("empty");
            return;
        }

        showState("idle");
        renderPosts(allResults);
    } catch (error) {
        showState("error");
    }
}

async function createPost() {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (title === "" || body === "") {
        alert("Completa el título y el contenido del post.");
        return;
    }

    showState("loading");

    try {
        const newPost = await createPostAPI(title, body);

        const customPost = {
            id: Date.now(),
            title: newPost.title,
            body: newPost.body
        };

        localPosts.unshift(customPost);
        saveLocalPosts();

        titleInput.value = "";
        bodyInput.value = "";

        showState("idle");
        renderPosts(getAllPosts());

        alert("Post creado correctamente.");
    } catch (error) {
        showState("error");
    }
}

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchPosts();
    }
});

window.onload = function () {
    showState("idle");
    loadPosts();
};
