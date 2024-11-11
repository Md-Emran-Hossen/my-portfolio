// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../shared/NavBar";
// import Home from "../pages/Home";
import Footer from "../shared/Footer";

const CommonLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;