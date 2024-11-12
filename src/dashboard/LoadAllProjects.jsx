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
        fetch(`https://my-portfolio-server-blond.vercel.app/project/${_id}`, {
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

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-green-50 font-bold text-xl">
                                <th>Project Name</th>
                                <th>Image</th>
                                <th>Project Live URL</th>
                                <th>GitHub URL</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {projects.map((project) => (
                                <tr key={project._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td>{project.projectName}</td>
                                    <td>
                                        <img src={project.image} className="w-16"></img>
                                    </td>
                                    <td>{project.projectLiveUrl}</td>
                                    <td>{project.gitHubUrl}</td>
                                    <td>{project.description}</td>
                                    <td>
                                        <Link to={`/dashboard/project/${project._id}`}>
                                            <button className="btn btn-outline btn-accent m-1">
                                                <HiPencilAlt /> Edit
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(experience._id)}
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