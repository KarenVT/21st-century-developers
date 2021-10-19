import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (

        <div className="flex justify-around">
            <Link to="/admin/RegistroProductos" className="mt-32 m-9">
                <button className=" text-white  text-4xl bg-indigo-500 p-2 rounded-full  hover:bg-indigo-700 mt-20 ">Master productos</button>
            </Link>

            {/* <div className="img  flex flex-col items-center mt-44">

            </div> */}
            
            <Link to="/Admin/Ventas" className="mt-32 ">
                <button className="text-white  text-4xl  bg-indigo-500 p-2 rounded-full  hover:bg-indigo-700 mt-20 ">Master ventas</button>
            </Link>
            {/* <div className="img2 flex-col flex items-center mt-44">


            </div> */}
        </div>
    )
};

export default Admin;
