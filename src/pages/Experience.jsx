import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/experiences')
            .then(res => res.json())
            .then(data => setExperiences(data));
    });
    console.log("Experiences Data Found", experiences);
    return (
        <div>
            <div className="text-4xl font-bold text-center p-8">
                <h2>Experiences</h2>
            </div>
            {/* <div className="pl-3 text-3xl font-semibold text-blue-600">
                <p>What I Provide</p>
            </div> */}
            <div className="grid grid-cols-1 mx-3 my-5">

                {experiences.map((experience, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">
                            <div className="w-full bg-base-200 items-center rounded">
                                <div className="card-body text-center text-black text-3xl font-bold">
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
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Experience;