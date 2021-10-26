import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Profile = ({ children }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-4xl text-principal bg-paleta5 bg-opacity-80  px-3 py-2 rounded-md  font-medium m-5 ">
                No estas autorizado para ver este sitio, inicia sesión para tener acceso
                </div>
                <div className='p-5'>
                    <Link to = '/'>
                    <button className='boton' >Volver a Inicio</button>
                    </Link>
                </div>
                </div>
                    
                
    );
};   

export default Profile;  