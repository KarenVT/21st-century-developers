import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, {useEffect} from 'react';
import PrivateRoute from "../components/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";


const PrivateLayaut = ({ children }) => {

    const { user, isAuthenticated, isLoading, getAccessTokenSilently  } = useAuth0();
// // este codigo me trae el token desde auth0
//    useEffect(() => {
//     const fetchAuth0Token = async () => {
//        const accessToken = await getAccessTokenSilently({
//           audience: `api-autenticacion`,
//     });
//     console.log(accessToken);
//     };       

//     fetchAuth0Token();
//    }, []);
// // hasta este punto va el codigo de llamar el token
    return (
        <PrivateRoute>
        <div className="flex flex-col justify-between h-screen">
        <Navbar/>
            <main className="h-full overflow-y-scroll">{children}</main>
            <Footer/>
        </div>
        </PrivateRoute>
    );
};

export default PrivateLayaut;