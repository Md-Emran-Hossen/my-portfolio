// import InsertProjectInfo from "./InsertProjectInfo";

import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="w-3/4 mx-auto bg-base-200 p-10">
            <ul>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/technologies">
                        Technologies
                    </NavLink>
                </li>
                <li className="text-3xl font-bold text-green-500 m-2 p-2">
                    <NavLink to="/dashboard/projects" >
                        Projects
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Dashboard;