import axios from "axios";
//esta es la constante para llamar el token
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

export const getProductos = async(successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'https://modaexpressbackend.herokuapp.com/productos/',
        headers: {
            Authorization: getToken(),
        },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProductos = async(data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'https://modaexpressbackend.herokuapp.com/productos/',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken(),
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const patchProductos = async(id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `https://modaexpressbackend.herokuapp.com/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken(),
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProductos = async(id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `https://modaexpressbackend.herokuapp.com/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken(),
        },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};