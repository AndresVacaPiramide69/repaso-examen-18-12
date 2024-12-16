const guardarSesion = (user) => {
    localStorage.setItem('sesion', JSON.stringify(user));
}

const borrarSesion = () => {
    localStorage.removeItem('sesion');
}

function getSesion() {
    return JSON.parse(localStorage.getItem('sesion'));
}

export { guardarSesion, borrarSesion, getSesion }