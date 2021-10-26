import Express from 'express';

import { deleteUsuarios, getUsuarios, patchUsuarios, postUsuarios } from '../../controllers/Usuarios/controladorUsuarios.js';
const rutasUsuarios = Express.Router();

const callbackGeneral = (res) => (err, resul) => {
    if (err) {
        res.status(500).send("error consultando las Usuarios");
    }
    else {
        res.json(resul);
    }
}


rutasUsuarios.route("/usuarios").get((req, res) => {
    console.log("se llama a registro Usuarios");
    //realizar una conexion a la base de datos para mostrar lo que hay en la colección
    getUsuarios(callbackGeneral(res));
});


rutasUsuarios.route("/usuarios").post((req, res) => {
    postUsuarios(req.body, callbackGeneral(res))
});

// rutasUsuarios.route("/Usuarios/:id").post((req, res) => {
//     consultarPorUsuario(req.params.id, callbackGeneral(res))
// });

rutasUsuarios.route("/usuarios/:id").patch((req, res) => {
    patchUsuarios(req.params.id, req.body, callbackGeneral(res));
});

rutasUsuarios.route("/usuarios/:id").delete((req, res) => {
    deleteUsuarios(req.params.id, callbackGeneral(res));
});


export default rutasUsuarios;