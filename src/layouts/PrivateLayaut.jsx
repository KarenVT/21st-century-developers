import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from 'react';
import Sidebar from "../components/Sidebar";

const PrivateLayaut = ({ children }) => {
    return (
        <div className="">
        <main className="">{children}</main>
        </div>
    );
};

export default PrivateLayaut;
