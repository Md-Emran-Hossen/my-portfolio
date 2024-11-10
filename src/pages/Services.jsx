// import Navbar from "../shared/NavBar";
// import Banner from "../shared/Banner";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

// import { useEffect, useState } from "react";

 const Services = () => {
//     const [technologies, setTechnologies] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/technologies')
//             .then(res => res.json())
//             .then(data => setTechnologies(data));
//     });
//     console.log("Technology Data Found", technologies);
    return (
        <div>
            {/* <div className="text-4xl font-bold text-center p-8">
                <h2>Technologies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 m-3">

                {technologies.map((technology, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">

                                <div className="flex bg-base-200 items-center pl-5">
                                    <div>
                                        <figure>
                                            <img
                                                src={technology.image}
                                                alt={technology.technologyName}
                                                className="w-12 rounded" />
                                        </figure>
                                    </div>
                                 
                                    <div className="card-body pl-2">
                                        <p>  {technology.technologyName}</p>

                                    </div>
                                </div>
                            
                        </div>
                    )
                })}

            </div> */}


        </div>
    );
};

export default Services;