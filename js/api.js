const API_URL = "https://dummyjson.com/posts"

async function getPosts(){
const res = await fetch(API_URL)
const data = await res.json()
return data.posts
}

async function searchPostsAPI(query){
const res = await fetch(`${API_URL}/search?q=${query}`)
const data = await res.json()
return data.posts
}

async function createPostAPI(title,body){

const res = await fetch(`${API_URL}/add`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title:title,
body:body,
userId:1
})
})

return await res.json()

}
