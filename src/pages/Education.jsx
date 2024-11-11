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
            <h2>Examinations</h2>
        </div>
        {/* <div className="pl-3 text-3xl font-semibold text-blue-600">
            <p>What I Provide</p>
        </div> */}
        <div className="grid grid-cols-1 mx-3 my-5">

            {examinations.map((examination, index) => {
                return (
                    <div key={index}
                        className="card transition duration-300 ease-in-out hover:scale-110">
                        <div className="w-full bg-base-200 items-center rounded">
                            <div className="card-body text-center text-black text-3xl font-bold">
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
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    </div>
    );
};

export default Education;