import axios from "axios";


// CRUD VEntas
// Get - Leer Datos
export const getVentas = async (resCallBack, errorCallBack) => {

    const options = { method: 'GET', url: 'http://localhost:5000/ventas' };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};
// Post - Crear Datos
export const postVentas = async (data, resCallBack, errorCallBack) => {

    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas',
        headers: { 'Content-Type': 'application/json' },
        data,
    };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};
// Patch - Editar datos
export const patchVentas = async (id, data, resCallBack, errorCallBack) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data
    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};
// delete - eliminar datos
export const deleteVentas = async (id, resCallBack, errorCallBack) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/ventas/${id}`,
        headers: { 'Content-Type': 'application/json' }
    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};


// CRUD Productos
// Get - Leer Datos
export const getProductos = async (resCallBack, errorCallBack) => {

    const options = { method: 'GET', url: 'http://localhost:5000/Productos' };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};
// Post - Crear Datos
export const postProductos = async (data, resCallBack, errorCallBack) => {

    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos',
        headers: { 'Content-Type': 'application/json' },
        data,
    };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};
// Patch - Editar datos
export const patchProductos = async (id, data, resCallBack, errorCallBack) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data
    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};
// delete - eliminar datos
export const deleteProductos = async (id, resCallBack, errorCallBack) => {
    const options = {
        method: 'DELETE',
            url: `http://localhost:5000/Productos/${id}`,
            headers: { 'Content-Type': 'application/json' }
    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};


// CRUD Usuarios/roles
// Get - Leer Datos
export const getUsuarios = async (resCallBack, errorCallBack) => {

    const options = { 
        method: 'GET', url: 'http://localhost:5000/usuarios'
    };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};