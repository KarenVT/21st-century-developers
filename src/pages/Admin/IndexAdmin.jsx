import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex justify-around">
            <div className="img  flex flex-col ">
                <Link to="/admin/RegistroProductos">
                    <button className="text-white  text-4xl  bg-indigo-500 p-2 rounded-lg  hover:bg-indigo-700">Master productos</button>
                </Link>
            </div>
            <div className="img2 flex-col  ">
                <Link to="/Admin/Ventas">
                    <button className="text-white  text-4xl  bg-indigo-500 p-2 rounded-lg  hover:bg-indigo-700">Master ventas</button>
                </Link>

            </div>
        </div>
    )
};

export default Admin;
