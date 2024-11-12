import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const LoadAllServices = () => {

    const loadedServices = useLoaderData();
    console.log("Services Info", loadedServices);
    const [services, setServices] = useState(loadedServices);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://my-portfolio-server-blond.vercel.app/service/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success("Service data deleted Successfully", {
                        position: "top-right",
                    });
                    const remainingData = services.filter((service) => service._id !== _id);
                    setServices(remainingData);
                }
            });
    };

    return (
        <div>
            <div className="mt-14 mx-2 my-5">
                <div className="flex justify-center justify-items-center">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Total Services: {services.length}
                    </h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
    py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                        >
                            Home
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-green-50 font-bold text-xl">
                                <th>Service Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {services.map((service) => (
                                <tr key={service._id}
                                    className="hover:bg-gray-100"
                                >
                                    <td>{service.serviceName}</td>
                                    <td>
                                        <img src={service.image} className="w-16"></img>
                                    </td>
                                    <td>{service.description}</td>
                                    <td className="flex">
                                        <button onClick={() => handleDelete(service._id)}
                                            className="btn btn-outline btn-error m-1">
                                            <MdDelete />Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LoadAllServices;