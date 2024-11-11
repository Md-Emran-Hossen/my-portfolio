import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/experiences')
            .then(res => res.json())
            .then(data => setExperiences(data));
    });
    return (
        <div>
            <div className="text-4xl font-bold text-center p-8">
                <h2>Experiences</h2>
            </div>
            <div className="grid grid-cols-1 mx-3 my-5">
                <div
                    className="card transition duration-300 ease-in-out hover:scale-100">
                    <div className="w-11/12 mx-auto bg-base-200 items-center rounded">

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
                                        <th className="py-2 px-4 border">
                                            From
                                        </th>
                                        <th className="py-2 px-4 border">
                                            To
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
                                                {experience.from}
                                            </td>
                                            <td className="py-2 px-4 border">
                                                {experience.to}
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* <div className="card-body text-center text-black text-3xl font-bold">
                                    <p> 
                                        <span className="text-green-600 text-3xl font-bold">Designation:</span>  
                                        &nbsp; {experience.designation}
                                    </p>
                                </div>
                                <div className="card-body text-center text-black text-3xl font-bold">
                                    <p> 
                                    <span className="text-green-600 text-3xl font-bold">Institute:</span>  
                                    &nbsp; {experience.institute}
                                    </p>
                                </div>
                                <div className="card-body text-center text-black text-3xl font-bold">
                                    <p> 
                                    <span className="text-green-600 text-3xl font-bold">Job Description:</span>  
                                    &nbsp;  {experience.jobDescription}
                                    </p>
                                </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;