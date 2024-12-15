import { getPosts } from "./server_ops.js";
document.addEventListener('DOMContentLoaded', cargarPagina);

async function cargarPagina() {
    const posts = await getPosts('http://localhost:3000/posts')
    posts.forEach(element => 
        console.log(element.comments.forEach(e => console.log(e)))
    );
}