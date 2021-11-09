import { getBD } from "../../db/db.js";
import { ObjectId } from "mongodb";
import jwt_decode from "jwt-decode";

const queryAllUsers = async (callback) => {
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').find({}).limit(50).toArray(callback);
};

const postUsuarios = async (datosUsuario, callback) => {
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').insertOne(datosUsuario, callback);
};

const consultarUsuario = async (id, callback) => {
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').findOne({ _id: new ObjectId(id) }, callback);
};

const consultarOCrearUsuario = async (req, callback) => {
  // 6.1. obtener los datos del usuario desde el token
  const token = req.headers.authorization.split('Bearer ')[1];
  const user = jwt_decode(token)['http://localhost/userData'];
  console.log(user);

  // paso 2: consultar el usuario en la BD
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').findOne({ email: user.email }, async (err, response) => {
    if (response) {
      console.log(response);
      // 7.1. si el usuario ya esta en la BD, devuelve la info del usuario
      callback(err, response);
    } else {
      // 7.2. si el usuario no esta en la bd, lo crea y devuelve la info
      user.auth0ID = user._id;
      delete user._id;
      user.rol = 'sin rol';
      user.estado = "pendiente";
      await postUsuarios(user, (err, respuesta) => callback(err, user));
    }
  });
};

const patchUsuarios = async (id, edicion, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const conexionbd = getBD();
  await conexionbd
    .collection('Usuarios')
    .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteUsuarios = async (id, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').deleteOne(filtroUsuario, callback);
};

export {
  queryAllUsers,
  postUsuarios,
  consultarUsuario,
  patchUsuarios,
  deleteUsuarios,
  consultarOCrearUsuario,
};