
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    });
    console.log("Project Data Found", projects);

    return (
        <div>
            <div className="text-4xl font-bold text-center py-5 my-5">
                <h2>Projects</h2>
            </div>
            <div className="pl-3 text-3xl font-semibold text-blue-600">
                <p>What I Built</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">

                {projects.map((project, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110 ml-5">

                            <div className="card bg-base-100 shadow-xl mt-10">
                                <figure>
                                    <img
                                        src={project.image}
                                        alt={project.projectName}
                                        className="w-full rounded h-36" />
                                </figure>
                                <div className="card-body text-left pl-5">
                                    <p> <span className="font-bold">Project Name:</span> {project.projectName}</p>

                                    <p><span className="font-bold"> Description: </span> {project.description.slice(0, 40)} </p>

                                    <div className="mt-5">
                                        <Link to={`/project/${project._id}`}

                                            className="w-3/4 flex items-center 
                                    justify-center px-8 py-3 border border-transparent 
                                    text-base font-medium rounded-md text-white bg-blue-500
                                     hover:bg-blue-200 md:py-4 md:text-lg md:px-10"

                                        >
                                            Read more
                                            <BsArrowRightSquareFill className="inline ml-3" />
                                            {/* {String.fromCharCode(8592)}  */}
                                        </Link>
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

export default Projects;