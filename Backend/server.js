import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import { ConectarBD } from "./db/db.js";
import rutasVentas from "./views/Ventas/rutasVentas.js";
import rutasProductos from "./views/Productos/rutasProductos.js";
import rutasUsuarios from "./views/Usuarios/rutasUsuarios.js";
dotenv.config({ path: './.env' });



const app = Express();
app.use(Express.json());
app.use(Cors());
app.use(rutasVentas);
app.use(rutasProductos);
app.use(rutasUsuarios);


const main = () => {

    return app.listen(process.env.PORT, () => {
        console.log(`puerto activo ${process.env.PORT}`);
    });
}

ConectarBD(main);