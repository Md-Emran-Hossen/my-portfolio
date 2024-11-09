// import Navbar from "../shared/NavBar";
// import Banner from "../shared/Banner";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

import { useEffect, useState } from "react";

const Services = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/technologies')
            .then(res => res.json())
            .then(data => setTechnologies(data));
    });
    console.log("Technology Data Found", technologies);
    return (
        <div>
            <div className="text-5xl font-bold text-center p-7">
                <h2>Technologies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-3 m-3">

                {technologies.map((technology, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">

                            <div className="card bg-red-600 shadow-xl mt-10">

                                <div className="flex items-center p-2">
                                    <div>
                                        <figure>
                                            <img
                                                src={technology.image}
                                                alt={technology.technologyName}
                                                className="w-10 rounded" />
                                        </figure>
                                    </div>

                                    {/* &nbsp;  &nbsp; {technology.technologyName} */}
                                    <div className="card-body pl-2">
                                        <p>  {technology.technologyName}</p>

                                        {/* <p><span className="font-bold"> Description: </span> {technologies.description.slice(0, 40)} </p> */}

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    );
};

export default Services;