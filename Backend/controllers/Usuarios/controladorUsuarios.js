import { getBD } from "../../db/db.js";
import { ObjectId } from "mongodb";
import jwt_decode from "jwt-decode";

// opcional
// const consultarPorUsuario = async (id, callback) => {
//     const conexionbd = getBD();
//     await conexionbd
//         .collection("Usuarios")
//         .findOne({_id: new ObjectId}, callback);
// }

//crear usuario
const crearusuario = async (datosusuario, callback) => {
    const conexionbd = getBD();
    await conexionbd.collection("Usuarios").insertOne(datosusuario, callback);
    // .limit(50)

};


const getUsuarios = async (id, callback) => {
    const conexionbd = getBD();
    await conexionbd.collection("Usuarios").findOne({ _id: new ObjectId(id) }, callback);
    // .limit(50)

};

//consultar usuario creado en la base de datos o crear el usuario de la base de datos 
const consultarocrearusuario = async (req, callback) => {
    //obtener los datos del usuario desde el token
    const token = req.headers.authorization;
    const user = jwt_decode(token)['http://localhost/userData'];
    console.log(user);

    //consultar con el correo si el usuario esta registrado en la base de datos
    const conexionbd = getBD();
    await conexionbd.collection("Usuarios").findOne({ email: user.email }, async (err, response) => {
        console.log("consulta base de datos", response);
        //si e l usuario existe devuelve la información
        if (response) {
            callback(err, response);

        }
        //si el usuario no existe en la base de datos crear el mismo
        else {
            user.auth0ID = user._id;
            delete user._id;
            user.rol = "inactivo";
            await crearusuario(user, (err, respuesta) => callback(err, user));
            }       
    });
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

const deleteUsuarios = async (id, callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };
    const conexionbd = getBD();
    await conexionbd
        .collection("Usuarios").deleteOne(filtroUsuario, callback);
}

export { crearusuario, getUsuarios, postUsuarios, patchUsuarios, deleteUsuarios, consultarocrearusuario };