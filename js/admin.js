//---------------------
let listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));
const formularioLogin = document.getElementById("login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValidar = document.getElementById("email").value;
    const passwordValidar = document.getElementById("pass").value;
    let usuarioObtenido;

    listUsuarios.forEach(usuario => {

        if (usuario.correo === emailValidar) {
            usuarioObtenido = usuario;
        }
    });

    if (usuarioObtenido) {
        if (usuarioObtenido.password === passwordValidar) {
            let login = {
                logeado: true,
                nombre: usuarioObtenido.nombre
            };

            localStorage.setItem("login", JSON.stringify(login));
            window.location.href = "/index.html";
        } else {
            alert("Contraseña Incorrecta");
        }
    }else{
        alert("Correo no encontrado");
    }

    // console.log(usuarioObtenido);
    // const nombreUsuario = document.getElementById("id_user").value;
});

function mostrarUsuarios() {
    console.log(listUsuarios);
}