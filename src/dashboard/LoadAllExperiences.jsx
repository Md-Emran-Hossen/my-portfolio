import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const LoadAllExperiences = () => {
    const loadedExperience = useLoaderData();
    // console.log("Examinations Info", loadedExaminations);
    const [experiences, setExperiences] = useState(loadedExperience);

    const handleDelete = (_id) => {
        fetch(`https://my-portfolio-server-blond.vercel.app/experience/${_id}`, {
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
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                                     hover:text-white py-2 px-4 border border-blue-500 
                                       hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Home
                        </button>
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-green-50 font-bold text-xl">
                                <th>Designation</th>
                                <th>Institute</th>
                                <th>Job Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {experiences.map((experience) => (
                                <tr key={experience._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td>{experience.designation}</td>
                                    <td>{experience.institute}</td>
                                    <td>{experience.jobDescription}</td>
                                    <td>
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