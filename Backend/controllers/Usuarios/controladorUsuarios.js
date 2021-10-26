import { getBD } from "../../db/db.js";
import { ObjectId } from "mongodb";

// opcional
// const consultarPorUsuario = async (id, callback) => {
//     const conexionbd = getBD();
//     await conexionbd
//         .collection("Usuarios")
//         .findOne({_id: new ObjectId}, callback);
// }

const getUsuarios = async (callback) => {
    const conexionbd = getBD();
    await conexionbd
        .collection("Usuarios")
        .find({})
        // .limit(50)
        .toArray(callback);
};

const postUsuarios = async (datosUsuarios, callback) => {   
    if (
        Object.keys(datosUsuarios).includes("id") &&
        Object.keys(datosUsuarios).includes("nombre") &&
        Object.keys(datosUsuarios).includes("email") &&
        Object.keys(datosUsuarios).includes("roles") &&
        Object.keys(datosUsuarios).includes("estado")
    ) {
        //implementar codigo para crear un producto en la base de datos 
        const conexionbd = getBD();
        await conexionbd
            .collection("Usuarios").insertOne(datosUsuarios, callback);
    } else {
        // return 'error';
    }
}

const patchUsuarios = async (id, datosEditados, callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };

    // hacerlo para borrar lo que lleva el body y que no agrege el campo ID
    // delete datosEditados.id;
    const operacion = {
        $set: datosEditados,
    };
    const conexionbd = getBD();
    await conexionbd
        .collection("Usuarios").findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteUsuarios = async (id,callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };
    const conexionbd = getBD();
    await conexionbd
        .collection("Usuarios").deleteOne(filtroUsuario, callback);
}

export { getUsuarios, postUsuarios, patchUsuarios, deleteUsuarios };