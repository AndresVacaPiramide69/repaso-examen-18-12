import { getUsers } from "./server_ops.js";
import Usuario from './Usuario.js'
import { guardarSesion, borrarSesion } from './localstorage.js'
document.addEventListener('DOMContentLoaded', asignarListeners);

function asignarListeners() {
    document.getElementById('loginEmail').addEventListener('blur', validarEmail);
    document.getElementById('loginPassword').addEventListener('blur', validarPassword);
    document.getElementById('loginForm').addEventListener('submit', validarForm);
}

let userEmail;
let userPwd

function validarEmail(e){
    if(!e.target.value)
        userEmail = null;

    userEmail = e.target.value;
}

function validarPassword(e){
    if(!e.target.value)
        userPwd = null;

    userPwd = e.target.value;
}

function validarForm(e){
    e.preventDefault();

    if(!userEmail || !userPwd)
        alert('Inicio de sesion incorrecto');

    else login(userEmail, userPwd);
}

async function login(userMail, userPwd) {
 
    const users = await getUsers('http://localhost:3000/usuarios')
        .then(result => result.map(c =>
            ({
                id:c.id,
                nameUser:c.nameUser,
                password:c.password,
                apellidos:c.apellidos,
                email:c.email,
                DNI:c.DNI
            })
        ));

    const userFound = users.filter(u => u.email === userMail && u.password === userPwd);
    console.log(userFound)
    
    if (userFound) {

        guardarSesion(userFound[0]);
        location.href = 'http://127.0.0.1:5500/index.html'
    } else {
        alert('No encontrado');
    }
}