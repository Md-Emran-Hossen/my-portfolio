

 import { useEffect, useState } from "react";

 const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    });
    console.log("Services Data Found", services);
    return (
        <div>
            <div className="text-4xl font-bold text-center p-8">
                <h2>Services</h2>
            </div>
            <div className="pl-3 text-3xl font-semibold text-blue-600">
                <p>What I Provide</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 my-5">

                {services.map((service, index) => {
                    return (
                        <div key={index}
                            className="card transition duration-300 ease-in-out hover:scale-110">

                                <div className="bg-base-200 items-center rounded">
                                    <div>
                                        <figure>
                                            <img
                                                src={service.image}
                                                alt={service.serviceName}
                                                className="w-24 py-2 rounded" />
                                        </figure>
                                    </div>
                                 
                                    <div className="card-body text-center text-black font-3xl font-bold">
                                        <p>  {service.serviceName}</p>
                                    </div>
                                    <div className="card-body pl-2 text-justify">
                                        {/* <p>  {service.description.slice(0, 100)} tittle={service.description}</p> */}
                                        <p> {service.description}</p>
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