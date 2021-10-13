import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from 'react';
import Sidebar from "../components/Sidebar";

const PrivateLayaut = ({ children }) => {
    return (
        <div className="flex w-screen h-screen">
        <Sidebar/>
        <main className="flex w-full bg-blue-400 overflow-y-scroll">{children}</main>
        </div>
    );
};

export default PrivateLayaut;
