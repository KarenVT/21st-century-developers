import React ,{useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Profile = ({ children }) => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
// este codigo me trae el token desde auth0
useEffect(() => {
    const fetchAuth0Token = async () => {
       const accessToken = await getAccessTokenSilently({
          audience: `api-autenticacion`,
    });
    // este codigo sirve para guardar el token en el local storage
    localStorage.setItem("token",accessToken);
    
    };       
    if(isAuthenticated){
        fetchAuth0Token();
    }
    fetchAuth0Token();
   }, [isAuthenticated, getAccessTokenSilently]);
// hasta este punto va el codigo de llamar el token


if (isLoading) return <div className="text-7xl text-red-600">Loading...</div>;

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