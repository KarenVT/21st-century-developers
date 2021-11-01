import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    //este codigo me sirve para que el Local Storage borre el token que guardo y vuelva a pedir el Token
    const cerrarsesion = () => {
        logout({ returnTo: window.location.origin });
        localStorage.setItem("token", null);
    };


    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    return (

        <nav className="bg-paleta5 bg-opacity-20  flex Flex items-center">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2  text-principal hover:text-white hover:bg-paleta3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                            onClick={() => {
                                setMostrarNavegacion(!mostrarNavegacion);
                            }}
                        >

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    {/*  */}
                        <i id="boton" type="button" className="bg-principal text-white hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">


                            <button
                                onClick={() => loginWithRedirect()}
                            >Perfil</button>

                        </i>

                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/Home/Index" className="text-2xl text-principal" htmlFor="">Moda Express</Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <i id="boton" type="button" className="bg-principal text-white hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">


                                    <button
                                        onClick={() => loginWithRedirect()}
                                    >Iniciar Sesión</button>

                                </i>

                                <Link to="../Admin/ " className="text-principal hover:bg-paleta3 hover:bg-opacity-40  px-3 py-2 rounded-md text-sm font-medium" htmlFor="">Admin</Link>


                                <i href="#" className="text-principal hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">Projects</i>

                                <i href="#" className="text-principal hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">Calendar</i>

                                <i id="boton" type="button" className="bg-principal text-white hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">
                                    <button onClick={() => cerrarsesion()}
                                    >Cerrar sesión</button>
                                </i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {mostrarNavegacion && (
                <div className="sm:hidden" id="menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">

                        <i id="boton" type="button" className="bg-principal text-white hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">


                            <button
                                onClick={() => loginWithRedirect()}
                            >Iniciar Sesión</button>

                        </i>
                        <i href="#" className="text-principal hover:bg-paleta3 hover:bg-opacity-40 block px-3 py-2 rounded-md text-base font-medium">Team</i>

                        <i href="#" className="text-principal hover:bg-paleta3 hover:bg-opacity-40 block px-3 py-2 rounded-md text-base font-medium">Projects</i>

                        <i href="#" className="text-principal hover:bg-paleta3 hover:bg-opacity-40 block px-3 py-2 rounded-md text-base font-medium">Calendar</i>

                        <i id="boton" type="button" className="bg-principal text-white hover:bg-paleta3 hover:bg-opacity-40 px-3 py-2 rounded-md text-sm font-medium">
                            <button onClick={() => logout({ returnTo: window.location.origin })}
                            >Cerrar sesión</button>

                        </i>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
