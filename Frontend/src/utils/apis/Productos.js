import axios from "axios";
//esta es la constante para llamar el token
const getToken =() => {
    return `bearer ${localStorage.getItem("token")}`;
};

export const getProductos = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos/',
        headers: {
            Authorization: getToken(),
          },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const postProductos = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/',
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
        url: `http://localhost:5000/productos/${id}/`,
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
        url: `http://localhost:5000/productos/${id}/`,
        headers: { 'Content-Type': 'application/json',
        Authorization: getToken(),
    },

    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};