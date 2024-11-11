// import React from 'react';
import { NavLink } from "react-router-dom";
import navPic from "../../public/images/pic1.jpg";

const Navbar = () => {

    const navLink = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/education">Education</NavLink>
            </li>
            <li>
                <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-blue-500 font-extrabold">Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={navPic} className="w-16 rounded-full p-1"></img>
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;