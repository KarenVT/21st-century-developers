import axios from "axios";

const getToken =() => {
    return `bearer ${localStorage.getItem("token")}`;
};

// CRUD PARA USUARIOS

export const getUsuarios = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios/',
        headers: { 
        Authorization: getToken(),
          },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

// export const postUsuarios = async (data, resCallBack, errorCallBack) => {

//     const options = {
//         method: 'POST',
//         url: 'http://localhost:5000/usuarios/',
//         headers: { 'Content-Type': 'application/json' },
//         data,
//     };

//     await axios
//         .request(options).then(resCallBack).catch(errorCallBack);

// };

// export const patchUsuario = async (id, data, successCallback, errorCallback) => {
//     const options = {
//         method: 'PATCH',
//         url: `http://localhost:5000/usuarios/${id}/`,
//         headers: { 'Content-Type': 'application/json' },
//         data,
//     };
//     await axios.request(options).then(successCallback).catch(errorCallback);
// };

// export const deleteUsuarios = async (id, resCallBack, errorCallBack) => {
//     const options = {
//         method: 'DELETE',
//         url: `http://localhost:5000/usuarios/${id}/`,
//         headers: { 'Content-Type': 'application/json' }
//     };
//     await axios
//         .request(options).then(resCallBack).catch(errorCallBack);
// };
