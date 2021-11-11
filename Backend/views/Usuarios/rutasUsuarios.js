import Express from 'express';
import {  queryAllUsers,consultarOCrearUsuario, deleteUsuarios, consultarUsuario, patchUsuarios, postUsuarios } from '../../controllers/Usuarios/controladorUsuarios.js';

const rutasUsuarios = Express.Router();

const callBackGeneral = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los usuarios');
  } else {
    res.json(result);
  }
};

rutasUsuarios.route('/usuarios').get((req, res) => {
  console.log('alguien hizo get en la ruta /usuarios');
  queryAllUsers(callBackGeneral(res));
});

rutasUsuarios.route('/usuarios').post((req, res) => {
  postUsuarios(req.body, callBackGeneral(res));
});

rutasUsuarios.route('/usuarios/self').get((req, res) => {
  console.log('alguien hizo get en la ruta /self');
  consultarOCrearUsuario(req, callBackGeneral(res));
});

rutasUsuarios.route('/usuarios/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /usuarios');
  consultarUsuario(req.params.id, callBackGeneral(res));
});

rutasUsuarios.route('/usuarios/:id').patch((req, res) => {
    patchUsuarios(req.params.id, req.body, callBackGeneral(res));
});

rutasUsuarios.route('/usuarios/:id').delete((req, res) => {
    deleteUsuarios(req.params.id, callBackGeneral(res));
});


export default rutasUsuarios;