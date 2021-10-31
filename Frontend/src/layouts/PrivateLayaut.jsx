import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, {useEffect} from 'react';
import PrivateRoute from "../components/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";


const PrivateLayaut = ({ children }) => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
    console.log(user,isAuthenticated,isLoading);
    }, [user, isAuthenticated, isLoading]);

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
