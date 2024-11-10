

const Contact = () => {
    return (
        <div className="bg-gray-50 m-3">
            <div>
                <h2 className="text-5xl font-bold text-center mt-10 p-5"> Contact</h2>
            </div>


            {/* <div className="hero"> */}
            <div className="flex flex-col md:flex-row">

                <div className="w-full">
                    <diV className="p-3">
                        <h1 className="text-4xl text-green-600 font-bold top-0">Connect with me </h1>
                        <p className="text-xl text-gray-500">
                            If you want to know more about me or my work, or if you would just
                            like to say hello, send me a message. I'd love to hear from you.
                        </p>
                    </diV>
                    <form className="p-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">Message</span>
                            </label>
                            <textarea type="text" placeholder="Enter ypur message" className="input input-bordered h-24" />
                        </div>

                        <div className="form-control my-3 flex sm:flex-col md:flex-row items-center justify-between">
                            <div>
                                <a href="https://accounts.google.com/" target="_blank"
                                    className="underline">
                                    Send me email directly
                                </a>
                            </div>
                            <div>
                                <button className="btn btn-primary py-3 px-8">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-full py-12 pr-3">

                    <p className="py-12 sm:text-left md:text-right text-xl">
                        <br /> <br />
                        <span className="text-black text-3xl font-bold">Email</span>
                        <h2 className="text-blue-600 font-bold">doict.parshuram@gmail.com</h2>
                    </p>
                    {/* <br />
                    <br /> */}
                    <p className="py-3 sm:text-left md:text-right text-xl">
                        <span className="text-black text-3xl font-bold"> Address </span>
                        <h2 className="text-blue-600 font-bold">Upazila Parishad</h2>
                        <h2 className="text-blue-600 font-bold">Parshuram</h2>
                        <h2 className="text-blue-600 font-bold">Feni</h2>
                    </p>
                    <p className="py-3 sm:text-left md:text-right text-xl">
                        <span className="text-black text-3xl font-bold">Social</span>
                        <div className="flex space-x-2 sm:justify-start md:justify-end">
                            <a href="https://stackoverflow.com/" target="_blank">
                                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
                                    alt="Stack OverFlow">
                                </img>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png" alt="Instagram"></img>
                            </a>

                            <a href="https://github.com//" target="_blank">
                                <img src="https://img.icons8.com/doodle/40/000000/github--v1.png" alt="GitHub"></img>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png" alt="LinkedIn"></img>
                            </a>
                        </div>
                    </p>
                </div>

            </div>
            {/* </div> */}
        </div>
    );
};

export default Contact;