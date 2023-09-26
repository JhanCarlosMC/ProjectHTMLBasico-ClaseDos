const texto = 'cadena de texto';
const pi = "3.1415";
const logicos = true;

let nombre = "Jhan";
let edad = 50;
let flag = false;

//calcularEdad();

function calcularEdad() {
    if (edad < 18) {
        console.log("Joven");

    } else if (edad < 30) {
        console.log("Adolecente");

    } else if (edad < 40) {
        console.log("Persona Responsable");

    } else {
        console.log("Persona de la Tercera edad");

    }
}


//
function testLet() {
    let x = "Se declaro en el padre";

    if (true) {
        let y = "Se declaro en el hijo";
    }

    return x;
}

let mensaje = testLet();
console.log(mensaje);
