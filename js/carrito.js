let listCarrito = [];

if(JSON.parse(localStorage.getItem("listCarrito"))){
    listCarrito = JSON.parse(localStorage.getItem("listCarrito"));
    cargarProductos();
}

function cargarProductos() {
    let contenedorProductosCargados = document.getElementById("seccion-carrito");
    listCarrito.forEach(producto => {
        let divProducto = crearProducto(producto.id, producto.nombre, producto.descripcion, producto.imagen, producto.precio, producto.cantidad);

        contenedorProductosCargados.appendChild(divProducto);
    });
}

function crearProducto(id, nombre, descripcion, imagenURL, precio, cantidad) {
    const divProducto = document.createElement("div");
    divProducto.id = "contenedor-producto" + id;
    divProducto.className = "contener-producto-carrito";

    const h4Producto = document.createElement("h3");
    h4Producto.textContent = nombre;

    const imgProducto = document.createElement("img");
    imgProducto.src = imagenURL;
    imgProducto.alt = "Imagen de " + nombre;
    imgProducto.width = "100";

    const descripcionProducto = document.createElement("p");
    descripcionProducto.innerHTML = "<strong>Descripcion:</strong> " + descripcion;

    const precioProducto = document.createElement("p");
    precioProducto.innerHTML = `<strong>Precio</strong>: $${precio} COP`;

    const cantidadProducto = document.createElement("p");
    cantidadProducto.innerHTML = "<strong>Cantidad: </strong> " + cantidad;

    const botonEliminarCarrito = document.createElement("button");
    botonEliminarCarrito.textContent = "Eliminar del Carrito"
    botonEliminarCarrito.setAttribute("onclick", `eliminarCarrito(${id})`);

    divProducto.appendChild(h4Producto);
    divProducto.appendChild(imgProducto);
    divProducto.appendChild(descripcionProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(cantidadProducto);
    divProducto.appendChild(botonEliminarCarrito);

    return divProducto;
}

function eliminarCarrito(id){

    listCarrito.forEach(producto => {
        if(producto.id === id){
            listCarrito.splice(listCarrito.indexOf(producto),1);
        }
    });

    localStorage.setItem("listCarrito", JSON.stringify(listCarrito));
    location.reload();
}
