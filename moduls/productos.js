function crearProducto(imagenUrl, nombre, precio, descripcion) {
    // Crear contenedor del producto
    const producto = document.createElement("div");
    producto.classList.add("producto");

    // Crear y asignar la imagen
    const imagenElemento = document.createElement("img");
    imagenElemento.src = imagenUrl;
    imagenElemento.alt = nombre;
    imagenElemento.classList.add("imagen-producto");

    // Crear y asignar elementos internos
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;

    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    precioElemento.classList.add("precio");

    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    descripcionElemento.classList.add("descripcion");

    // Agregar elementos al contenedor
    producto.appendChild(imagenElemento);
    producto.appendChild(titulo);
    producto.appendChild(precioElemento);
    producto.appendChild(descripcionElemento);

    // Devolver el producto creado
    return producto;
}

export { crearProducto };