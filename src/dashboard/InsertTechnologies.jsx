
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const InsertTechnologies = () => {

    const [formData, setFormData] = useState({
        technologyName: '',
        image: null,
        description: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const imageHostKey = import.meta.env.VITE_IMAGEBB_KEY;

    const validateForm = () => {
        const newErrors = {};
        if (!formData.technologyName) {
            newErrors.technologyName = "Technology Name is Required";
        }
        if (!formData.image) {
            newErrors.image = "Photo is Required";
        }
        if (!formData.description) {
            newErrors.description = "Description is Required";
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
                const technologies = {

                    technologyName: formData.technologyName,
                    image: imgData.data.url,
                    description: formData.description,
                };

                // Save Technology information to the database
                const result = await fetch('http://localhost:5000/technologies', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(technologies)
                })

                const data = await result.json();
                // console.log("Project Data Found", data);
                if (data.insertedId) {
                    console.log("Data object found:", data.insertedId);
                    toast.success(`${formData.technologyName} is added successfully`);
                    navigate('/dashboard');
                } else {
                    toast.error('Failed to add technology information.');
                }
            } else {
                toast.error('Image upload failed. Please try again.');
            }
        } catch (error) {
            console.error('Failed to add technology information:', error);
            toast.error('An error occurred while adding the technology.');
        }
    };

    return (
        <div>
            <h2 className="text-3xl md:text-center font-bold mt-5 p-2 underline">Add Technology Information</h2>
            <div className="mx-auto mt-5 p-2">
                <form onSubmit={handleSubmit} className="w-full">

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Technology Name:
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                name="technologyName"
                                value={formData.technologyName}
                                onChange={handleInputChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        {errors.technologyName && <p className='text-red-500 text-xs'>{errors.technologyName}</p>}
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

export default InsertTechnologies;