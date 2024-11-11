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
import InsertServices from "../dashboard/InsertServices";
import LoadAllProjects from "../dashboard/LoadAllProjects";
import EditProjects from "../dashboard/EditProjects";
import LoadAllTechnologies from "../dashboard/LoadAllTechnologies";
import LoadAllServices from "../dashboard/LoadAllServices";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import InsertEducation from "../dashboard/InsertEducation";
import InsertExperience from "../dashboard/InsertExperience";
import LoadAllEducationInfo from "../dashboard/LoadAllEducationInfo";
import LoadAllExperiences from "../dashboard/LoadAllExperiences";

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
        {
          path: "/education",
          element: <Education></Education>,
        },
        {
          path: "/experience",
          element: <Experience></Experience>,
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
          {
            path: "/dashboard/services",
            element: <InsertServices />,
          },
          {
            path: "/dashboard/education",
            element: <InsertEducation />,
          },
          {
            path: "/dashboard/experience",
            element: <InsertExperience />,
          },
          {
            path: "/dashboard/allProjects",
            element: <LoadAllProjects></LoadAllProjects>,
            loader: () => fetch("http://localhost:5000/projects"),
          },
          {
            path: "/dashboard/project/:id",
            element: <EditProjects></EditProjects>,
            loader: ({params}) => fetch(`http://localhost:5000/project/${params.id}`),
          },
          {
            path: "/dashboard/allTechnologies",
            element: <LoadAllTechnologies></LoadAllTechnologies>,
            loader: () => fetch("http://localhost:5000/technologies"),
          },
          {
            path: "/dashboard/allServices",
            element: <LoadAllServices></LoadAllServices>,
            loader: () => fetch("http://localhost:5000/services"),
          },
          {
            path: "/dashboard/allExaminations",
            element: <LoadAllEducationInfo></LoadAllEducationInfo>,
            loader: () => fetch("http://localhost:5000/educations"),
          },
          {
            path: "/dashboard/allExperience",
            element: <LoadAllExperiences></LoadAllExperiences>,
            loader: () => fetch("http://localhost:5000/experiences"),
          },
        ],
    },
  ]);

export default router;