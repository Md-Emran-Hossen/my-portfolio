// import React from 'react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const InsertProjectInfo = () => {

    const [formData, setFormData] = useState({
        projectName: '',
        image: null,
        description: '',
		projectLiveUrl: '',
		gitHubUrl: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const imageHostKey = import.meta.env.VITE_IMAGEBB_KEY;

      const validateForm = () => {
        const newErrors = {};
        if (!formData.projectName) {
            newErrors.projectName = "Project Name is Required";
        } 
        if (!formData.image) {
            newErrors.image = "Photo is Required";
        }
        if (!formData.description) {
            newErrors.description = "Description is Required";
        }
        if (!formData.projectLiveUrl) {
            newErrors.projectLiveUrl = "Project Live URL is Required";
        }
        if (!formData.gitHubUrl) {
            newErrors.gitHubUrl = "GitHub URL is Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const image = formData.image;
        const imageData = new FormData();
        imageData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        try {
            const res = await fetch(url, {
                method: 'POST',
                body: imageData
            });
            const imgData = await res.json();

            if (imgData.success) {
                const project = {

                    projectName: formData.projectName,
                    image: imgData.data.url,
                    description: formData.description,
                    projectLiveUrl: formData.projectLiveUrl,
                    gitHubUrl: formData.gitHubUrl,
                };
                
                // Save project information to the database
                const result = await fetch('https://my-portfolio-server-blond.vercel.app/projects', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(project)
                })

                const data = await result.json();
                // console.log("Project Data Found", data);
                if (data.insertedId) {
                    console.log("Data object found:", data.insertedId);
                    toast.success(`${formData.projectName} is added successfully`);
                     navigate('/dashboard');
                } else {
                    toast.error('Failed to add project information.');
                }
            } else {
                toast.error('Image upload failed. Please try again.');
            }
        } catch (error) {
            console.error('Failed to add project:', error);
            toast.error('An error occurred while adding the project.');
        }
    };


    return (
        <div>
           <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">Add Project Information</h2>
            <div className="mx-auto mt-5 p-2">
                <form onSubmit={handleSubmit} className="w-full">

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Project Name:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.projectName && <p className='text-red-500 text-xs'>{errors.projectName}</p>}
                    </div>       

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Image:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="file"
                                name="image"
                                onChange={handleFileChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.image && <p className='text-red-500 text-xs'>{errors.image}</p>}

                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Description:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.description && <p className='text-red-500 text-xs'>{errors.description}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Project Live URL:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="projectLiveUrl"
                                value={formData.projectLiveUrl}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.projectLiveUrl && <p className='text-red-500 text-xs'>{errors.projectLiveUrl}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            GitHub URL:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="gitHubUrl"
                                value={formData.gitHubUrl}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.gitHubUrl && <p className='text-red-500 text-xs'>{errors.gitHubUrl}</p>}
                    </div>          

                   
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">

                        <input 
                           className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
                           font-bold py-2 px-4 mb-10 rounded" 
                            value="Submit" 
                            type="submit" 
                        />
                         
                        </div>
                    </div>

                   

                </form>
            </div>
        </div>
    );
};

export default InsertProjectInfo;