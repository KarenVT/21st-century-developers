import { getBD } from "../../db/db.js";
import { ObjectId } from "mongodb";

// opcional
// const consultarPorVenta = async (id, callback) => {
//     const conexionbd = getBD();
//     await conexionbd
//         .collection("Ventas")
//         .findOne({_id: new ObjectId}, callback);
// }

const getVentas = async (callback) => {
    const conexionbd = getBD();
    await conexionbd
        .collection("Ventas")
        .find({})
        .limit(50)
        .toArray(callback);
};

const postVentas = async (datosVentas, callback) => {
    if (
        Object.keys(datosVentas).includes("id") &&
        Object.keys(datosVentas).includes("fecha") &&
        Object.keys(datosVentas).includes("idProducto") &&
        Object.keys(datosVentas).includes("nombreProducto") &&
        Object.keys(datosVentas).includes("idCliente") &&
        Object.keys(datosVentas).includes("cantidadProducto") &&
        Object.keys(datosVentas).includes("nombreCliente") &&
        Object.keys(datosVentas).includes("nombreVendedor") &&
        Object.keys(datosVentas).includes("precioUnitario") &&
        Object.keys(datosVentas).includes("totalVenta")
    ) {
        //implementar codigo para crear un Venta en la base de datos 
        const conexionbd = getBD();
        await conexionbd
            .collection("Ventas").insertOne(datosVentas, callback);
    } else {
        
    }
}

const patchVentas = async (id, datosEditados, callback) => {
    const filtroVenta = { _id: new ObjectId(id) };

    // hacerlo para borrar lo que lleva el body y que no agrege el campo ID
    // delete datosEditados.id;
    const operacion = {
        $set: datosEditados,
    };
    const conexionbd = getBD();
    await conexionbd
        .collection("Ventas").findOneAndUpdate(filtroVenta, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteVentas = async (id,callback) => {
    const filtroVenta = { _id: new ObjectId(id) };
    const conexionbd = getBD();
    await conexionbd
        .collection("Ventas").deleteOne(filtroVenta, callback);
}

export { getVentas, postVentas, patchVentas, deleteVentas };