import React from 'react';
import { useUser } from '../context/userContext';

const PrivateRoute = ({ roleList, children }) => {
const {userData} = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

 return <div className="text-4xl text-principal bg-paleta5 bg-opacity-80  px-3 py-2 rounded-md  font-medium m-5 ">No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;