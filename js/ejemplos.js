
//Construir un algoritmo para mostrar un triángulo rectángulo
//dependiendo de un número ingresado por el usuario:
//Si se ingresa el 5:
// 5
// 55
// 555
// 5555
// 55555

trianguloRectangulo(7);
function trianguloRectangulo(tam){
    let fila = "";

    for(let i = 0; i < tam; i++){

        fila += tam;
        console.log(fila);
    }
}