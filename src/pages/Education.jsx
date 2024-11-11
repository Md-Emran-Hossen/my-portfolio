import React, { useEffect, useState } from 'react';

const Education = () => {
    const [examinations, setExaminations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/educations')
            .then(res => res.json())
            .then(data => setExaminations(data));
    });
    console.log("Services Data Found", examinations);
    return (
        <div>
            <div className="text-4xl font-bold text-center p-8">
                <h2>Education History</h2>
            </div>
            <div className="grid grid-cols-1 mx-3 my-5">
                        <div 
                            className="card transition duration-300 ease-in-out hover:scale-100">
                            <div className="w-full mx-auto bg-base-200 items-center rounded">

                                <div className="container mx-auto p-4">
                                    <table className="w-full bg-white border">
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {examinations.map((examination) => (
                                                <tr
                                                    key={examination._id}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="py-2 px-4 border">
                                                        {examination.examTitle}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {examination.subject}
                                                    </td>

                                                    <td className="py-2 px-4 border">
                                                        {examination.institute}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {examination.result}
                                                    </td>

                                                    <td className="py-2 px-4 border">
                                                        {examination.passingYear}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {examination.duration}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                    <span className="text-green-600 text-3xl font-bold">Exam Title:</span>  
                                   &nbsp; {examination.examTitle}
                                </p>
                            </div>
                            <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                <span className="text-green-600 text-3xl font-bold">Subject:</span>  
                                &nbsp; {examination.subject}
                                </p>
                            </div>
                            <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                <span className="text-green-600 text-3xl font-bold">Institute:</span>  
                                &nbsp;  {examination.institute}
                                </p>
                            </div>
                            <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                <span className="text-green-600 text-3xl font-bold">Result:</span>  
                                &nbsp;  {examination.result}
                                </p>
                            </div>
                            <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                <span className="text-green-600 text-3xl font-bold">Passing Year:</span>  
                                &nbsp;   {examination.passingYear}
                                </p>
                            </div>
                            <div className="card-body text-center text-black text-3xl font-bold">
                                <p> 
                                <span className="text-green-600 text-3xl font-bold">Duration:</span>  
                                &nbsp;  {examination.duration}
                                </p>
                            </div> */}
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Education;