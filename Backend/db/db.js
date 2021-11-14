import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

const conexion = process.env.BD_URL;

const client = new MongoClient(conexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexionbd;

const ConectarBD = (callBack) => {
    client.connect((err, db) => {
        if (err) {
            console.error("error al conectar a la base de datos");
        }
        conexionbd = db.db("modaexpress");
        console.log("conexión exitosa")
        return callBack();
    });
}

const getBD = () => {
    return conexionbd
}

export { ConectarBD, getBD };