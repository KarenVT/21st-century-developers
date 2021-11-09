import { getBD } from "../db/db.js";
import jwt_decode from "jwt-decode";

const autenticacionUsuario = async (req, res, next) => {
  // paso 1: obtener el usuario desde el token
  const token = req.headers.authorization.split('Bearer ')[1];
  const user = jwt_decode(token)['http://localhost/userData'];
  console.log(user);

  // paso 2: consultar el usuario en la BD
  const conexionbd = getBD();
  await conexionbd.collection('Usuarios').findOne({ email: user.email }, async (err, response) => {
    if (response) {
      console.log(response);
      if (response.estado === 'rechazado') {
        res.sendStatus(401);
        res.end();
      } else {
        console.log('habilitado');
        next();
      }
    } else {
      next();
    }
  });  

};


export default autenticacionUsuario;