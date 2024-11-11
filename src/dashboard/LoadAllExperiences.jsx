import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const LoadAllExperiences = () => {
    const loadedExperience = useLoaderData();
    // console.log("Examinations Info", loadedExaminations);
    const [experiences, setExperiences] = useState(loadedExperience);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/experience/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("Experience data deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = experiences.filter((experience) => experience._id !== _id);
                    setExperiences(remainingData);
                }
            });
    };
    return (
        <div>
            <div className="mt-14 mx-2 my-5">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Total Experiences: {experiences.length}
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
                                    Designation
                                </th>
                                <th className="py-2 px-4 border">
                                    Institute
                                </th>
                                <th className="py-2 px-4 border">
                                    Job Description
                                </th>
                                <th className="py-2 px-5 border">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {experiences.map((experience) => (
                                <tr
                                    key={experience._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="py-2 px-4 border">
                                        {experience.designation}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {experience.institute}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {experience.jobDescription}
                                    </td>               
                                   
                                    <td className="py-2 px-4 border">
                                        {/* <Link to={`/dashboard/project/${project._id}`}>
                                    <button className="btn btn-outline btn-accent m-1">
                                        <HiPencilAlt /> Edit
                                    </button>
                                </Link> */}
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

export default LoadAllExperiences;