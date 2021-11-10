import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import jwks from "jwks-rsa";
import jwt from "express-jwt";

import { ConectarBD } from "./db/db.js";
import rutasVentas from "./views/Ventas/rutasVentas.js";
import rutasProductos from "./views/Productos/rutasProductos.js";
import rutasUsuarios from "./views/Usuarios/rutasUsuarios.js";
import autenticacionUsuario from "./Middleware/autenticacionUsuario.js";

dotenv.config({ path: './.env' });



const app = Express();
app.use(Express.json());
app.use(Cors());

// aquí inicia la autenticación del Backend
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://misiontic-modaexpress.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'api-autenticacion',
  issuer: 'https://misiontic-modaexpress.us.auth0.com/',
  algorithms: ['RS256'],
});

app.use(jwtCheck);

// aquí termina la primera parte de la autenticación del Backend

app.use(autenticacionUsuario);

app.use(rutasVentas);
app.use(rutasProductos);
app.use(rutasUsuarios);


const main = () => {

    return app.listen(process.env.PORT, () => {
        console.log(`puerto activo ${process.env.PORT}`);
    });
}

ConectarBD(main);