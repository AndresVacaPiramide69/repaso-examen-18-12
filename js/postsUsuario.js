import { get } from "./server_ops.js";
import { getSesion } from "./localstorage.js";

document.addEventListener('DOMContentLoaded', asignarListeners);

async function asignarListeners() {
    showPosts()
}

async function postsByUser() {
    const postFromDB = await get('http://localhost:3000/posts')
        .then(res => res.map(p => ({
            id:p.id,
            titulo:p.titulo,
            descripcion:p.descripcion,
            comentarios:p.comentarios || [],
            fechaPublicacion: p.fechaPublicacion,
            usuarioId:p.usuarioId
        })));

    const usuario = await getSesion();
    console.log(usuario);
    const userPosts = postFromDB.filter(p => p.usuarioId === usuario.id);
    console.log(userPosts);
    return userPosts;
}

async function showPosts() {
    
    const posts = await postsByUser();

    posts.forEach(element => {
        const ol = document.createElement('ol');
        ol.setAttribute('id', element.id);
        
        const titulo = document.createElement('')
        

        const main = document.querySelector('main');
        main.append(ol);
    });
}