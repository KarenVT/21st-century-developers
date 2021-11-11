import { getBD } from "../../db/db.js";
import { ObjectId } from "mongodb";

// opcional
// const consultarPorProducto = async (id, callback) => {
//     const conexionbd = getBD();
//     await conexionbd
//         .collection("Productos")
//         .findOne({_id: new ObjectId}, callback);
// }

const getProductos = async (callback) => {
    const conexionbd = getBD();
    await conexionbd
        .collection("Productos")
        .find({})
        .limit(50)
        .toArray(callback);
};

const postProductos = async (datosProductos, callback) => {
    if (
        Object.keys(datosProductos).includes("idProducto") &&
        Object.keys(datosProductos).includes("nombreProducto") &&
        Object.keys(datosProductos).includes("descripcionProducto") &&
        Object.keys(datosProductos).includes("precioUnitario") &&
        Object.keys(datosProductos).includes("estado")
    ) {
        //implementar codigo para crear un producto en la base de datos 
        const conexionbd = getBD();
        await conexionbd
            .collection("Productos").insertOne(datosProductos, callback);
    } else {
        
    }
}

const patchProductos = async (id, datosEditados, callback) => {
    const filtroProducto = { _id: new ObjectId(id) };

    // hacerlo para borrar lo que lleva el body y que no agrege el campo ID
    // delete datosEditados.id;
    const operacion = {
        $set: datosEditados,
    };
    const conexionbd = getBD();
    await conexionbd
        .collection("Productos").findOneAndUpdate(filtroProducto, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteProductos = async (id,callback) => {
    const filtroProducto = { _id: new ObjectId(id) };
    const conexionbd = getBD();
    await conexionbd
        .collection("Productos").deleteOne(filtroProducto, callback);
}

export { getProductos, postProductos, patchProductos, deleteProductos };