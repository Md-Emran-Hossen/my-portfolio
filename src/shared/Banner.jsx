// import React from 'react';
// import bannerImage from "../../public/images/banner.jpeg";
import bannerRight from "../../public/images/bannerRight.svg";
// import { saveAs } from "file-saver";
// import { pdf } from "@react-pdf/renderer";
import myResume from "../../public/resume/myCv.pdf";
// import { Link } from "react-router-dom";

const Banner = () => {

    // const downloadFile = () => {
    //     // window.location.href = "../../public/resume/myCv.pdf";
    //     location.assign("../../public/resume/myCv.pdf");
    //   }
    
    // const downloadPdf = async () => {
    //     const fileName = 'resume.pdf';
    //     const blob = await pdf(<myResume />).toBlob();
    //     saveAs(blob, fileName);
    //   };

    return (
        <div
            className="hero min-h-screen m-1 bg-blue-100"
           >
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-1">
                <div className="hero-content text-neutral-content text-left">
                    <div className="max-w-md">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                            <span className="block text-black p-1">Hi, I am Md. Emran Hossen</span>
                        </h1>
                        <span className="block text-4xl text-blue-700 z-0 lg:inline p-1">
                            <p>
                                Full Stack Devoloper
                            </p>
                        </span>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        {/* <button onClick={downloadFile} 
                            className="w-3/4 flex items-center 
                                    justify-center px-8 py-3 border border-transparent 
                                    text-base font-medium rounded-md text-white bg-blue-500
                                     hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                            Resume
                        </button> */}
                        <a  className="w-3/4 flex items-center 
                                    justify-center px-8 py-3 border border-transparent 
                                    text-base font-medium rounded-md text-white bg-blue-500
                                     hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        href = {myResume} target = "_blank">Resume</a>
                    </div>
                </div>
                <div>
                    <img src={bannerRight} className="min-w-48"></img>
                </div>

            </div>
        </div>
    );
};

export default Banner;