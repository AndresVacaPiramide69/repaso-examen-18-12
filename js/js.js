import { getUsers } from "./server_ops.js";

document.addEventListener('DOMContentLoaded', asignarListeners);

function asignarListeners(){
    document.getElementById("nameUser").addEventListener('blur', validateUserName);
    document.getElementById("pwdUser").addEventListener('blur', validatePassword);
    document.getElementById("login").addEventListener('submit', validateFormulario);
}

let username;
let password;

function validateFormulario(e){
    e.preventDefault();
    if(!username || !password){
        alert('no se ha introducido bien los parametros');
    }
    else login(username, password)
}

function validatePassword(e) {
    if(!e.target.value){
        password = null;
    }
    password = e.target.value
    
}

function validateUserName(e){
    if(!e.target.value){
        username = null;
    }
    username = e.target.value
}

async function login(userName, password) {

    if(!userName || !password){
        throw new Error("Error login");
    }

    const usersFromDB  = await getUsers('http://localhost:3000/usuarios');
    
    
}