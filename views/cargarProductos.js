import { crearProducto } from "../moduls/productos.js";
import { productosAPI } from "../services/api.js";

async function mostrarProductos(contenedor) {
    try {
        let datos = await productosAPI();
        console.log(datos);

        // Llama a la función para agregar los productos al DOM
        todoLosProductos(datos, contenedor);
    } catch (error) {
        console.error("error", error);
    }
}

function todoLosProductos(datos, contenedor) {
    datos.forEach(element => {
        console.log(element);

        // Crea un producto y lo agrega al contenedor
        contenedor.appendChild(
            crearProducto(element.image, element.title, element.price, element.description)
        );
    });
}

export { mostrarProductos };