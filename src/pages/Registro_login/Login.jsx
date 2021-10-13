import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="h-screen flex flex-col w-full justify-center items-center bg-yellow-600">
            <h2 className="m-4 text-center text-3xl font-extrabold text-gray-900">INICIA SESIÓN EN TU CUENTA</h2>
            <form className="mt-8 max-w-md">
                <div>
                    <p>Usuario</p>
                    <input className="appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="email" placeholder="@c.com" required />
                </div>
                <div>
                    <p>Contraseña</p>
                    <input className="appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="password" required />
                </div>

                <div >
                    <label htmlFor=" recuérdame ">
                        <input type="checkbox" name=" recuerdame " />
                        Recuérdame
                    </label>
                </div>
                <br />
                <div className="bg-indigo-500 p-2 text-white rounded-lg    shadow-md hover:bg-indigo-700">
                    <Link to="/">
                        Olvidaste tu contraseña
                    </Link>
                </div>
                <br />
                <div className="">
               
                    <Link to="/">
                        <button className="bg-indigo-500 p-2 text-white rounded-lg    shadow-md hover:bg-indigo-700" type="submit">Iniciar sesión</button>
                    </Link>
                </div>
                <br />
                <div>
                    <button className="bg-indigo-500 p-2 text-white rounded-lg    shadow-md hover:bg-indigo-700">Continua con Google</button>
                </div>
                
            </form>
        </div>
    )

};

export default Login;
