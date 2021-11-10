import axios from "axios";

// url con heroku
// const urlFija = "http://localhost:5000" ------> servidor local
export const urlFija = "https://enigmatic-beyond-44695.herokuapp.com"

//esta es la constante para llamar el token
const getToken =() => {
    return `Bearer ${localStorage.getItem("token")}`;
};

export const getProductos = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${urlFija}/productos/`,
        headers: {
            Authorization: getToken(),
          },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProductos = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: `${urlFija}/productos/`,
        headers: { 'Content-Type': 'application/json',
         Authorization: getToken(),
    },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const patchProductos = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${urlFija}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json',
        Authorization: getToken(),
          },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProductos = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${urlFija}/productos/${id}/`,
        headers: { 'Content-Type': 'application/json',
        Authorization: getToken(),
    },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};