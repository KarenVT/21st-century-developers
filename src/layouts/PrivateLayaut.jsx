import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import React from 'react';
import PrivateRoute from "../components/PrivateRoute";


const PrivateLayaut = ({ children }) => {

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
