import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InsertEducation = () => {
    const [formData, setFormData] = useState({
        examTitle: '',
        subject: '',
        institute: '',
        result: '',
        passingYear: '',
        duration: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.examTitle) {
            newErrors.examTitle = "Exam Title is Required";
        }
        if (!formData.subject) {
            newErrors.subject = "Subject is Required";
        }
        if (!formData.institute) {
            newErrors.institute = "Institute is Required";
        }
        if (!formData.result) {
            newErrors.result = "Result is Required";
        }
        if (!formData.passingYear) {
            newErrors.passingYear = "Passing Year is Required";
        }
        if (!formData.duration) {
            newErrors.duration = "Duration is Required";
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

        const education = {
            examTitle: formData.examTitle,
            subject: formData.subject,
            institute: formData.institute,
            result: formData.result,
            passingYear: formData.passingYear,
            duration: formData.duration,
        };

        // Save Services information to the database
        const result = await fetch('https://my-portfolio-server-blond.vercel.app/educations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(education)
        })

        const data = await result.json();
       
        if (data.insertedId) {
            // console.log("Data object found:", data.insertedId);
            toast.success(`${formData.examTitle} is added successfully`);
            navigate('/dashboard/allExaminations');
        } else {
            toast.error('Failed to add education information.');
        }
};
return (
    <div>
        <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">Add Education Information</h2>
        <div className="mx-auto mt-5 p-2">
            <form onSubmit={handleSubmit} className="w-full">

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Exam Title:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="examTitle"
                            value={formData.examTitle}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.examTitle && <p className='text-red-500 text-xs'>{errors.examTitle}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Subject:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.subject && <p className='text-red-500 text-xs'>{errors.subject}</p>}
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
                            Result:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="result"
                            value={formData.result}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.result && <p className='text-red-500 text-xs'>{errors.result}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Passing Year:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.passingYear && <p className='text-red-500 text-xs'>{errors.passingYear}</p>}
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Duration:
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
          leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    {errors.duration && <p className='text-red-500 text-xs'>{errors.duration}</p>}
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

export default InsertEducation;