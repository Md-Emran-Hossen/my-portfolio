
// import Navbar from "../shared/NavBar";
// import Banner from "../shared/Banner";
// import Services from "./Services";
// import Projects from "./Projects";
// import Contact from "./Contact";

import { useEffect, useState } from "react";

const About = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-blond.vercel.app/technologies')
            .then(res => res.json())
            .then(data => setTechnologies(data));
    });
    console.log("Technology Data Found", technologies);
    return (
        <div>
            <p className="text-5xl font-bold text-center mt-10 p-10">About Me</p>
            <diV className="p-3">
                <h2 className="text-2xl font-bold text-blue-500">A bit about me</h2>
            </diV>
            <div className="p-3">
                <p>
                    I am a self-taught web developer and Mobile App Developer with experience 
                    in designing new features from ideation to production, 
                    implementation of wireframes and design flows into high performance 
                    software applications. I take into consideration the user experience 
                    while writing reusable and efficient code. I passionately combine 
                    good design, technology, and innovation in all my projects, 
                    which I like to accompany from the first idea to release.Currently, 
                    I am focused on the backend development.
                </p>
            </div>
            <diV className="p-3">
                <h2 className="text-2xl font-bold text-blue-500">Technologies and Tools</h2>
            </diV>
            <div className="p-3">
                <p>
                    Using a combination of cutting-edge technologies and reliable open-source 
                    software I build user-focused, performant apps and websites for smartphones, 
                    tablets, and desktops.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5">


            </div>
            {/* <div> */}
            <div className="text-4xl font-bold text-center p-8">
                <h2>Technologies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 m-3">

                {technologies.map((technology, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">

                            {/* <div className="card shadow-xl mt-10"> */}

                                <div className="flex bg-base-200 items-center pl-5">
                                    <div>
                                        <figure>
                                            <img
                                                src={technology.image}
                                                alt={technology.technologyName}
                                                className="w-12 rounded" />
                                        </figure>
                                    </div>

                                    {/* &nbsp;  &nbsp; {technology.technologyName} */}
                                    <div className="card-body pl-2">
                                        <p>  {technology.technologyName}</p>

                                        {/* <p><span className="font-bold"> Description: </span> {technologies.description.slice(0, 40)} </p> */}

                                    </div>
                                </div>

                            {/* </div> */}
                        </div>
                    )
                })}

            </div>
        {/* </div> */}
        </div>
    );
};

export default About;