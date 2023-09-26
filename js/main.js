//---------------Condicionales

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


//Leer dos números y comparar si son iguales.

//comparacionNumeros(10, 5);

function comparacionNumeros(num1, num2) {
    if (num1 === num2) {
        console.log("Los numeron son iguales");
    } else {
        console.log("Los numeron NO son iguales");
    }
}

//diaSemana(1);
//Leer un número y decir qué día de la semana es.
function diaSemana(valorDia) {

    switch (valorDia) {
        case 1:
            console.log("Lunes");
            break;

        case 2:
            console.log("Martes");
            break;

        case 3:
            console.log("Miercoles");
            break;

        default:
            console.log("Otro dia de la semana");
            break;
    }
}


//---------------Ciclos

ejemploWhile(0);

function ejemploWhile(var1) {

    while (var1 > 0) {
        //Codigo
        console.log("W "+var1);
        var1--;
    }
}

//ejemploDoWhile(0);
function ejemploDoWhile(var1) {
    
    do {
        console.log("Do "+var1);

        var1--;
        console.log("Do "+var1);
    } while (var1 > 0);
}

//ejemploFor(4);

function ejemploFor(var1) {
    
    for (let i = var1; i > 0; i--) {
        console.log("For "+i);
    }
}

sumaPares(7);
//Leer un número y sumar todos los números 
//pares que hayan entre 0 y el número ingresado.
function sumaPares(numero) {
    let sumaNumeros = 0;

    for (let i = 0; i <= numero; i+=2) {

        sumaNumeros += i;

        console.log("i = "+i);
        console.log("Suma = "+sumaNumeros);
    }

}