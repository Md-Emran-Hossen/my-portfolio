// import InsertProjectInfo from "./InsertProjectInfo";

import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <ul>
            <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/projects" >
                        Projects
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/technologies">
                        Technologies
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/services">
                        Services
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/education">
                        Examinations
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/experience">
                        Experience
                    </NavLink>
                </li>

                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/allProjects">
                        All Projects
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/allTechnologies">
                        All Technologies
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/allServices">
                        All Services
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/allExaminations">
                        All Examinations Information
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/allExperience">
                        All Experience Information
                    </NavLink>
                </li>
              

            </ul>
        </div>
    );
};

export default Dashboard;