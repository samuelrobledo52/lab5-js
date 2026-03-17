const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

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
        const posts = await getPosts();

        if (posts.length === 0) {
            showState("empty");
            return;
        }

        renderPosts(posts);
    } catch (error) {
        showState("error");
    }
}

async function searchPosts() {
    const query = searchInput.value.trim();

    postsContainer.innerHTML = "";

    if (query === "") {
        loadPosts();
        return;
    }

    showState("loading");

    try {
        const posts = await searchPostsAPI(query);

        if (posts.length === 0) {
            showState("empty");
            return;
        }

        renderPosts(posts);
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

        alert("Post creado correctamente.");

        titleInput.value = "";
        bodyInput.value = "";

        postsContainer.innerHTML = `
            <article class="post">
                <h3>${newPost.title}</h3>
                <p>${newPost.body}</p>
            </article>
        `;
    } catch (error) {
        showState("error");
    }
}

window.onload = function () {
    showState("idle");
    loadPosts();
};

