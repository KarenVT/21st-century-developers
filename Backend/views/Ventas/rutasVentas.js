import Express from 'express';
import { deleteVentas, getVentas, patchVentas, postVentas } from '../../controllers/Ventas/controladorVentas.js';

const rutasVentas = Express.Router();

const callbackGeneral = (res) => (err, resul) => {
    if (err) {
        res.status(500).send("error consultando las ventas");
    }
    else {
        res.json(resul);
    }
}


rutasVentas.route("/ventas/").get((req, res) => {
    console.log("se llama a registro ventas");
    //realizar una conexion a la base de datos para mostrar lo que hay en la colección
    getVentas(callbackGeneral(res));
});


rutasVentas.route("/ventas/").post((req, res) => {
    postVentas(req.body, callbackGeneral(res))
});

// rutasVentas.route("/ventas/:id").post((req, res) => {
//     consultarPorVenta(req.params.id, callbackGeneral(res))
// });

rutasVentas.route("/ventas/:id/").patch((req, res) => {
    patchVentas(req.params.id, req.body, callbackGeneral(res));
});

rutasVentas.route("/ventas/:id/").delete((req, res) => {
    deleteVentas(req.params.id, callbackGeneral(res));
});


export default rutasVentas;