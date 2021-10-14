import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import React from 'react';

const PrivateLayaut = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen">
        <Navbar/>
            <main classname="h-full overflow-y-scroll">{children}</main>
            <Footer/>
        </div>
    );
};

export default PrivateLayaut;
