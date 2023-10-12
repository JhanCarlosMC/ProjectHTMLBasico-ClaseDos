class Producto {
    constructor(id, nombre, imagen, precio, cantidadDisponible) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidadDisponible = cantidadDisponible;
    }
}

let productoDos = new Producto("2", "Camisa", "imgCamisa.png", 90000, 10);

let productoUno = {
    id: "1",
    nombre: "Tenis",
    imagen: "imgTenis.png",
    precio: 120000,
    cantidadDisponible: 5,
};

let listaProductos = [];
listaProductos.push(productoDos);
listaProductos.push(productoUno);

//Guardado de datos
localStorage.setItem("productos", JSON.stringify(listaProductos));

//Recuperacion de datos
// let listaProductosRecuperados = JSON.parse(localStorage.getItem("productos"));

//Recorrer arreglo
// listaProductosRecuperados.forEach(producto => {
//     console.log(producto);
//     //Recorrer objetos
//     for (const key in producto) {
//         console.log(key + ": " + producto[key]);
//     }
// });

function agregarProductoCarrito(idProducto) {
    listaProductos = JSON.parse(localStorage.getItem("productos"));

    let productosCarrito = document.getElementById("productos-carrito");
    let productoObtenido;
    let idParrafoDisponibilidad = "dispo-" + idProducto;

    let parrafoDisponibilidad = document.getElementById(idParrafoDisponibilidad);

    listaProductos.forEach(producto => {
        if (idProducto === producto.id) {
            producto.cantidadDisponible = producto.cantidadDisponible - 1;

            productoObtenido = producto;
        }
    });

    if (productoObtenido.cantidadDisponible >= 0) {

        let descripcionProductoCarrito = document.createElement("p");
        descripcionProductoCarrito.innerHTML = `<strong>Producto:</strong> ${productoObtenido.nombre} <br>
    <strong>Precio:</strong> $${productoObtenido.precio} <br>`;

        parrafoDisponibilidad.innerHTML = "Disponibilidad: " + productoObtenido.cantidadDisponible;

        productosCarrito.appendChild(descripcionProductoCarrito);

        console.log("cantidad " + productoObtenido.cantidadDisponible);
        localStorage.setItem("productos", JSON.stringify(listaProductos));
    }
}