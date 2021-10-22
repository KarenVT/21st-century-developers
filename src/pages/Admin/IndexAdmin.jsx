import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className=" h-full flex justify-around items-center">
            <div className="img flex flex-col ">
                <Link to="/admin/RegistroProductos">
                    <button className=" bg-opacity-80  items-center text-white  text-3xl  bg-principal p-2 w-full hover:bg-principal  hover:bg-opacity-50">Administración productos</button>
                </Link>
            </div>
            <div className="img2 flex-col h-screen">
                <Link to="/Admin/Ventas">
                    <button className="bg-opacity-80  items-center text-white  text-3xl  bg-principal p-2 w-full hover:bg-principal hover:bg-opacity-50">Administración ventas</button>
                </Link>
            </div>
        </div>
    )
};

export default Admin;
