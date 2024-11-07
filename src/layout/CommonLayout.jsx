// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";

const CommonLayout = () => {
    return (
        <div className="w-11/12 mx-auto bg-base-200">
          
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default CommonLayout;