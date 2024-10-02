import { readProductsFile } from "../models/productos_model";


function getAllProducts () {

    const productos = readProductsFile();
    res.status(200)
        .json(productos)
}

function getProductById (id) {

    const productoId = parseInt(req.params.id);
    const productos = readProductsFile();
    const producto = productos.find(p => p.id === productoId);

    if (producto) {
        res.status(200)
            .json(producto)
    } else {
        res.status(404)
            .json({mensaje: 'No se encontró el Producto'})
    }
}


export {getAllProducts, getProductById};