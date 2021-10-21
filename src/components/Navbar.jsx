import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-paleta5 bg-opacity-20 items-center">
            <ul className="flex w-full justify-between ">
                <li className="">
                <Link to="/Home/Index">
                <button className="text-white  text-1xl bg-indigo-500 p-2 rounded-full  hover:bg-indigo-700 ">Inicio</button>
            </Link>
                </li>
                <li>Navegación 1</li>
                <li>Navegación 2</li>
                <li>Navegación 3</li>
                <li className="px-3"> 
                <Link to="/Login">
                    <button className="bg-indigo-500 p-2 text-white rounded-lg    shadow-md hover:bg-indigo-700">Iniciar sesión</button>
                </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;
