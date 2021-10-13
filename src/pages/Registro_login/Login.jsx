import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="h-screen flex flex-col w-full justify-center items-center bg-yellow-600">
            <form className="mt-8 max-w-md w-screen bg-white px-20 py-10 rounded-full">
            <h2 className="m-4 text-center text-3xl font-extrabold text-gray-900">INICIA SESIÓN EN TU CUENTA</h2>
                <div>
                    <p>Usuario</p>
                    <input className="w-full appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="email" placeholder="@c.com" required />
                </div>
                <div >
                    <p>Contraseña</p>
                    <input className="w-full appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="password" required />
                </div>

                <div className="flex justify-between py-2">
                    <div className="">
                        <label htmlFor=" recuérdame ">
                            <input type="checkbox" name=" recuerdame " />
                            Recuérdame
                        </label>
                    </div>
                    <div className="">
                        <Link to="/">
                            Olvidaste tu contraseña
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <Link to="/">
                            <button className="bg-indigo-500 p-2 text-white rounded-full shadow-md hover:bg-indigo-700" type="submit">Iniciar sesión</button>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/Registro">
                            <button className="bg-indigo-500 p-2  text-white rounded-full shadow-md hover:bg-indigo-700">Registrarse</button>
                        </Link>
                    </div>
                </div>
                <br />
                <div className="flex justify-center">
                    <div className="px-2">
                        <button className=" bg-indigo-500 p-2 text-white rounded-full    shadow-md hover:bg-indigo-700">Continua con Google</button>
                    </div>
                </div>
            </form>
        </div>
    )

};

export default Login;
