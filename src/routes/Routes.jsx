// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import InsertTechnologies from "../dashboard/InsertTechnologies";
import InsertProjectInfo from "../dashboard/InsertProjectInfo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout></CommonLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
      ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard/technologies",
            element: <InsertTechnologies />,
          },
          {
            path: "/dashboard/projects",
            element: <InsertProjectInfo />,
          },
        ],
    },
  ]);

export default router;