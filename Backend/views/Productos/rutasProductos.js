import Express from 'express';
import { deleteProductos, getProductos, patchProductos, postProductos } from '../../controllers/Productos/controladorProductos.js';
const rutasProductos = Express.Router();

const callbackGeneral = (res) => (err, resul) => {
    if (err) {
        res.status(500).send("error consultando las Productos");
    }
    else {
        res.json(resul);
    }
}


rutasProductos.route("/productos/").get((req, res) => {
    console.log("se llama a registro Productos");
    //realizar una conexion a la base de datos para mostrar lo que hay en la colección
    getProductos(callbackGeneral(res));
});


rutasProductos.route("/productos/").post((req, res) => {
    postProductos(req.body, callbackGeneral(res))
});

// rutasProductos.route("/Productos/:id").post((req, res) => {
//     consultarPorProducto(req.params.id, callbackGeneral(res))
// });

rutasProductos.route("/productos/:id/").patch((req, res) => {
    patchProductos(req.params.id, req.body, callbackGeneral(res));
});

rutasProductos.route("/productos/:id/").delete((req, res) => {
    deleteProductos(req.params.id, callbackGeneral(res));
}); 


export default rutasProductos;