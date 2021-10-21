import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="h-screen flex flex-col w-full justify-center items-center">
            <form className="mt-8 max-w-md w-auto bg-white p-9  h-auto rounded-full">
            <h2 className="m-4 text-center text-3xl text-principal px-12">INICIA SESIÓN </h2>
                <div>
                <label for="email">Usuario</label>
                    <input className="input shadow-lg" type="email" placeholder="@c.com" required />
                </div>
                <div >
                <label for="password">Contraseña</label>
                    <input className="input shadow-lg" type="password" required />
                </div>

                <div className="flex justify-between p-2">
                    <div>
                        <label htmlFor=" recuerdame ">
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
                <div className="flex justify-between px-5">
                    <div className="w-2/5">
                        <Link to="/">
                            <button className="boton w-full" type="submit">Iniciar sesión</button>
                        </Link>
                    </div>
                    <div className="w-2/5">
                        <Link to="/Registro">
                            <button className="boton w-full">Registrarse</button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    <div className="px-2">
                        <button className="rounded-full h-10 p-2 focus:outline-none border-2 border-principal focus:text-white focus:bg-principal shadow-lg">Continua con <span className="text-red-800 focus:text-white">Google</span> </button>
                    </div>
                </div>
            </form>
        </div>
    )

};

export default Login;
