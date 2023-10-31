class Producto {
    constructor(id, nombre, imagen, precio, cantidadDisponible) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidadDisponible = cantidadDisponible;
    }
}

let listProductos = [];

//Recuperacion de datos
if (JSON.parse(localStorage.getItem("listProductos"))) {
    listProductos = JSON.parse(localStorage.getItem("listProductos"));
    cargarProductos();
}

// function agregarProductoCarrito(idProducto) {
//     listaProductos = JSON.parse(localStorage.getItem("productos"));

//     let productosCarrito = document.getElementById("productos-carrito");
//     let productoObtenido;
//     let idParrafoDisponibilidad = "dispo-" + idProducto;

//     let parrafoDisponibilidad = document.getElementById(idParrafoDisponibilidad);

//     listaProductos.forEach(producto => {
//         if (idProducto === producto.id) {
//             producto.cantidadDisponible = producto.cantidadDisponible - 1;

//             productoObtenido = producto;
//         }
//     });

//     if (productoObtenido.cantidadDisponible >= 0) {

//         let descripcionProductoCarrito = document.createElement("p");
//         descripcionProductoCarrito.innerHTML = `<strong>Producto:</strong> ${productoObtenido.nombre} <br>
//     <strong>Precio:</strong> $${productoObtenido.precio} <br>`;

//         parrafoDisponibilidad.innerHTML = "Disponibilidad: " + productoObtenido.cantidadDisponible;

//         productosCarrito.appendChild(descripcionProductoCarrito);

//         console.log("cantidad " + productoObtenido.cantidadDisponible);
//         localStorage.setItem("productos", JSON.stringify(listaProductos));
//     } else {
//         alert("Producto no disponible");
//     }
// }

function cargarProductos() {
    let contenedorProductosCargados = document.getElementById("lista-productos");
    console.log(listProductos);
    listProductos.forEach(producto => {
        let divProducto = crearProducto(producto.id, producto.nombre, producto.descripcion, producto.imagen, producto.precio, producto.cantidadDisponible);

        contenedorProductosCargados.appendChild(divProducto);
    });
}

function crearProducto(id, nombre, descripcion, imagenURL, precio, cantidadDisponible) {
    const divProducto = document.createElement("div");
    divProducto.id = "contenedor-producto" + id;

    const h4Producto = document.createElement("h3");
    h4Producto.textContent = nombre;

    const imgProducto = document.createElement("img");
    imgProducto.src = imagenURL;
    imgProducto.alt = "Imagen de " + nombre;
    imgProducto.width = "200";

    const descripcionProducto = document.createElement("p");
    descripcionProducto.innerHTML = "<strong>Descripcion:</strong> " + descripcion;

    const precioProducto = document.createElement("p");
    precioProducto.innerHTML = `<strong>Precio</strong>: $${precio} COP`;

    const disponibilidadProducto = document.createElement("p");
    disponibilidadProducto.innerHTML = `<strong>Disponibles:</strong> ${cantidadDisponible} Unidad(es)`;

    const botonAgregarCarrito = document.createElement("button");
    botonAgregarCarrito.textContent = "Agregar al Carrito"
    botonAgregarCarrito.setAttribute("onclick", `agregarCarrito(${id})`);

    divProducto.appendChild(h4Producto);
    divProducto.appendChild(imgProducto);
    divProducto.appendChild(descripcionProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(disponibilidadProducto);
    divProducto.appendChild(botonAgregarCarrito);

    return divProducto;
}

let listCarrito = [];
if (JSON.parse(localStorage.getItem("listCarrito"))) {
    listCarrito = JSON.parse(localStorage.getItem("listCarrito"));
}

function agregarCarrito(id) {
    let flag = false;


    listCarrito.forEach(element => {
        if(element.id === listProductos[id].id){
            flag = true;
            element.cantidad += 1;
        }
    });

    if (flag === false) {
        let newObjeto = listProductos[id];
        newObjeto.cantidad = 1;

        listCarrito.push(newObjeto);
    }

    localStorage.setItem("listCarrito", JSON.stringify(listCarrito));
}