import axios from "axios";
import { urlFija } from "./Productos";


const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};


export const getUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${urlFija}/usuarios/`,
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${urlFija}/usuarios/self`,
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const patchUsuarios = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${urlFija}/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUsuarios = async (id, successCallback, errorCallback) => {
  const options = {
      method: 'DELETE',
      url: `${urlFija}/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json',
      Authorization: getToken(),
  },

  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};