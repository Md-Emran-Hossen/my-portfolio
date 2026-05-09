import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InsertExperience = () => {
    const [formData, setFormData] = useState({
        designation: '',
        institute: '',
        jobDescription: '',
        from: '',
        to: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.designation) {
            newErrors.designation = "Designation is Required";
        }
        if (!formData.institute) {
            newErrors.institute = "Institute is Required";
        }
        if (!formData.jobDescription) {
            newErrors.jobDescription = "Result is Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const experience = {
            designation: formData.designation,
            institute: formData.institute,
            jobDescription: formData.jobDescription,
            from: formData.from,
            to:formData.to,
        };

        // Save Services information to the database
        const result = await fetch('http://localhost:5000/experiences', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(experience)
        })

        const data = await result.json();

        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.designation} is added successfully`);
            navigate('/dashboard/allExperience');
        } else {
            toast.error('Failed to add experience information.');
        }
    };
    return (
        <div>
            <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">Add Experience Information</h2>
            <div className="mx-auto mt-5 p-2">
                <form onSubmit={handleSubmit} className="w-full">

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Designation:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.designation && <p className='text-red-500 text-xs'>{errors.designation}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Institute:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="institute"
                                value={formData.institute}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.institute && <p className='text-red-500 text-xs'>{errors.institute}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Job Description:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="jobDescription"
                                value={formData.jobDescription}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.jobDescription && <p className='text-red-500 text-xs'>{errors.jobDescription}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                From:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="from"
                                value={formData.from}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.from && <p className='text-red-500 text-xs'>{errors.from}</p>}
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                To:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="to"
                                value={formData.to}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.to && <p className='text-red-500 text-xs'>{errors.to}</p>}
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

export default InsertExperience;