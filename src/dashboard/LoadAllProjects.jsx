// import React from 'react';

import { useState } from "react";
import toast from "react-hot-toast";
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from "react-router-dom";

const LoadAllProjects = () => {

    const loadedProjects = useLoaderData();
    console.log("Project Info", loadedProjects);
    const [projects, setProjects] = useState(loadedProjects);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/project/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                    // console.log(data);
                if (data.deletedCount) {
                    toast.success("Project data deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = projects.filter((project) => project._id !== _id);
                    setProjects(remainingData);
                }
            });
    };

    return (
        <div>
            <div className="mt-14 mx-2 my-5">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Total Projects: {projects.length}
                    </h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
        py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Home
                        </button>
                    </Link>
                </div>
                <div className="container mx-auto p-4">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 text-left">
                                <th className="py-2 px-4 border">
                                    Project Name
                                </th>
                                <th className="py-2 px-4 border">
                                    Image
                                </th>
                                <th className="py-2 px-4 border">
                                    Project Live URL
                                </th>
                                <th className="py-2 px-4 border">
                                    Git Hub URL
                                </th>
                                <th className="py-2 px-4 border">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr
                                    key={project._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="py-2 px-4 border">
                                        {project.projectName}
                                    </td>                                
                                    <td className="py-2 px-4 border">
                                        <img src={project.image} className="w-16"></img>
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {project.projectLiveUrl}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {project.gitHubUrl}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {project.description.slice(0, 50)}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        <Link to={`/dashboard/project/${project._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> Edit
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(project._id)}
                                            className="btn btn-outline btn-error m-1">
                                            <MdDelete />Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LoadAllProjects;