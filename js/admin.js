//---------------------
const formularioLogin = document.getElementById("login");

formularioLogin.addEventListener("submit", function (event){
    event.preventDefault();

    const nombreUsuario = document.getElementById("id_user").value;

    localStorage.setItem("nombreUsuario", nombreUsuario);

    window.location.href = "/index.html";
});

