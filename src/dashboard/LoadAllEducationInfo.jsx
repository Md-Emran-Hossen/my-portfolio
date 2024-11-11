import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const LoadAllEducationInfo = () => {

    const loadedEducations = useLoaderData();
    // console.log("Examinations Info", loadedExaminations);
    const [educations, setEducations] = useState(loadedEducations);

    const handleDelete = (_id) => {
        fetch(`https://my-portfolio-server-blond.vercel.app/education/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("Examinations data deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = educations.filter((education) => education._id !== _id);
                    setEducations(remainingData);
                }
            });
    };

    return (
        <div>
            <div className="mt-14 mx-2 my-5">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Total Examinations: {educations.length}
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
                                    Exam Title
                                </th>
                                <th className="py-2 px-4 border">
                                    Subject
                                </th>
                                <th className="py-2 px-4 border">
                                    Institute
                                </th>
                                <th className="py-2 px-4 border">
                                    Result
                                </th>
                                <th className="py-2 px-4 border">
                                    Passing Year
                                </th>
                                <th className="py-2 px-4 border">
                                    Duration
                                </th>
                                <th className="py-2 px-5 border">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {educations.map((education) => (
                                <tr
                                    key={education._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="py-2 px-4 border">
                                        {education.examTitle}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {education.subject}
                                    </td>

                                    <td className="py-2 px-4 border">
                                        {education.institute}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {education.result}
                                    </td>

                                    <td className="py-2 px-4 border">
                                        {education.passingYear}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {education.duration}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {/* <Link to={`/dashboard/project/${project._id}`}>
                                        <button className="btn btn-outline btn-accent m-1">
                                            <HiPencilAlt /> Edit
                                        </button>
                                    </Link> */}
                                        <button onClick={() => handleDelete(education._id)}
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

export default LoadAllEducationInfo;