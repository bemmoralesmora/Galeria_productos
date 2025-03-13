import { crearProducto } from "../moduls/productos.js";

async function productosAPI() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("API", data);

        // Recorrer los datos y crear los productos
        data.forEach(producto => {
            crearProducto(
                producto.title, // Nombre
                producto.price, // Precio
                producto.description, // Descripción
                producto.image // URL de la imagen
            );
        });

        return data;
    } catch (error) {
        console.error("error", error);
    }
}

export { productosAPI };