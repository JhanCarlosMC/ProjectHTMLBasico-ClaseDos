//.--------------Obtener elementos

//Obtener por ID
const parrafoUno = document.getElementById("parrafo-uno");
// console.log(parrafoUno);

//Obtener por querySelector Class
const parrafoDos = document.querySelector(".contenidoParrafos");
// console.log(parrafoDos);

//Obtener por querySelector Element
const parrafoElemento = document.querySelector("p");
// console.log(parrafoElemento);

//Obtener coleccion de elementos
const collectionP = document.getElementsByClassName("contenidoParrafos");
// console.log(collectionP);

const arrayP = Array.from(collectionP);
// console.log(arrayP);

//.--------------Modificar Contenido

//Modificacion por textContent
const parrafoTres = document.getElementById("parrafo-tres");
parrafoTres.textContent = "Parrafo modificado con textContent";

//Modificacion por innerHtml
const header = document.getElementById("header");
header.innerHTML = "<h1> Titulo Ingresado por JS </h1>";

//.--------------Moficicacion de Atributos

//Get
const enlace = document.querySelector("a");
const href = enlace.getAttribute("href")
console.log(href);

if (href === "") {
    //Set
    enlace.setAttribute("href", "https://en.wikipedia.org/wiki/Wiki");
}

enlace.setAttribute("id", "enlace-wiki");

//.--------------Crear y Agregar elementos
let cont = 1;
function agregarSeccion() {

    if (cont < 4) {
        //Creacion
        const seccion = document.createElement("div");
        seccion.innerHTML = `<h2> Seccion ${cont} </h2>`;
        seccion.setAttribute("class", `seccion`)
        seccion.style.backgroundColor = "red";

        //Agregar
        document.body.appendChild(seccion);
        cont++;
    } else {
        alert("Ya no puede crear mas secciones");
    }

}

//.--------------Agregar y Quitar CSS
function modificarStyle() {
    const seccionModificacion = document.querySelector(".seccion");
    seccionModificacion.removeAttribute("style");
}

//.------------Eliminar Seccion
function eliminarSeccion() {

    if (cont > 1) {
        const seccionEliminar = document.querySelector(".seccion");
        seccionEliminar.remove();

        cont--;
    } else {
        alert("Todas las secciones fueron eliminadas");

    }
}


//.--------------Eventos

//.--------------MouseEvents
header.addEventListener("mouseover", mouseEvent);

function mouseEvent() {
    header.style.backgroundColor = "green";
}

header.addEventListener("mouseout", mouseEventOt);

function mouseEventOt() {
    header.style.backgroundColor = "red";

}

const parrafoEvent = document.getElementById("parrafo-uno");

parrafoEvent.addEventListener("dblclick", () =>{
    console.log("Event Click on");
});

const formularioLogin = document.getElementById("login");

formularioLogin.addEventListener("submit", (event)=>{
    event.preventDefault();

    const usuario = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    parrafoEvent.textContent = "Bienvenido "+ usuario;

    
});






//
function paginaAdmin(){
    window.location.href = '/index.html';
}   