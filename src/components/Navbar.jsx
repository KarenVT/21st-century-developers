import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-paleta5 bg-opacity-20 ">
            <ul className="flex w-full justify-between my-3">
                <li>Logo</li>
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
