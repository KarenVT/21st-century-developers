import axios from "axios";
import { urlFija } from "./Productos";



const getToken = () => {
    return `Bearer ${localStorage.getItem("token")}`;
};

//CRUD DE VENTAS
export const getVentas = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${urlFija}/ventas/`,
        headers: {
            Authorization: getToken(),
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

// Post - post Datos
export const postVentas = async (data, resCallBack, errorCallBack) => {

    const options = {
        method: 'POST',
        url: `${urlFija}/Ventas/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken(),
        },
        data,
    };

    await axios
        .request(options).then(resCallBack).catch(errorCallBack);

};
// Patch - patch datos
export const patchVentas = async (id, data, resCallBack, errorCallBack) => {
    const options = {
        method: 'PATCH',
        url: `${urlFija}/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json', Authorization: getToken()
        },

        data
    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};
// delete - delete datos
export const deleteVentas = async (id, resCallBack, errorCallBack) => {
    const options = {
        method: 'DELETE',
        url: `${urlFija}/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },

    };
    await axios
        .request(options).then(resCallBack).catch(errorCallBack);
};

