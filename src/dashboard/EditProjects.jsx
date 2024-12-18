import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const EditProjects = () => {
    const loadedProject = useLoaderData();
    // console.log("Loaded Data:=", loadedProject);
    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const projectName = form.get("projectName");
        const projectLiveUrl = form.get("projectLiveUrl");
        const gitHubUrl = form.get("gitHubUrl");
        const description = form.get("description");

        const updatedProject = { projectName, projectLiveUrl, gitHubUrl, description };

        console.log("Update Data Found", updatedProject);

        fetch(`https://my-portfolio-server-blond.vercel.app/project/${loadedProject._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProject),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Updated Data Found", data);
                if (data.modifiedCount) {
                    toast.success("Data Updated Successfully", {
                        position: "top-right",
                    });
                    navigate("/dashboard/allProjects");
                }
            });
    };

    return (
        <div>
            <div className="my-5 mx-2 mt-20">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Update Project :
                    </h1>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
  py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Home
                        </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/dashboard/allProjects">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
  py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Project
                        </button>
                    </Link>
                </div>
                <form onSubmit={handleEdit} className="w-full ">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="projectName"
                            >
                                Project Name
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="projectName"
                                type="text"
                                name="projectName"
                                defaultValue={loadedProject.projectName}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="projectLiveUrl"
                            >
                                Project Live URL
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="projectLiveUrl"
                                type="text"
                                name="projectLiveUrl"
                                defaultValue={loadedProject.projectLiveUrl}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="gitHubUrl"
                            >
                                GitHub URL
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2
                                  border-gray-200 rounded-none w-full py-2 px-4
                                  text-gray-700 leading-tight focus:outline-none
                                  focus:bg-white focus:border-purple-500"
                                id="gitHubUrl"
                                type="text"
                                name="gitHubUrl"
                                defaultValue={loadedProject.gitHubUrl}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="description"
                            >
                                Description
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="description"
                                type="text"
                                name="description"
                                defaultValue={loadedProject.description}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="shadow bg-purple-500 hover:bg-purple-400 
                                            focus:shadow-outline focus:outline-none
                                          text-white font-bold py-2 px-4 rounded-none"
                                type="submit"
                            >
                                Update Project
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProjects;