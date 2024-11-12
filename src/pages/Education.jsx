import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

const Education = () => {
    const [examinations, setExaminations] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-blond.vercel.app/educations')
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
                    <div className="w-full mx-auto items-center rounded">

                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                    <tr className="bg-green-50 font-bold text-xl">
                                        <th>Exam Title</th>
                                        <th>Subject</th>
                                        <th>Institute</th>
                                        <th>Result</th>
                                        <th>Passing Year</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {examinations.map((examination) => (
                                        <tr>
                                            <td>{examination.examTitle}</td>
                                            <td>{examination.subject}</td>
                                            <td>{examination.institute}</td>
                                            <td>{examination.result}</td>
                                            <td> {examination.passingYear}</td>
                                            <td>{examination.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;