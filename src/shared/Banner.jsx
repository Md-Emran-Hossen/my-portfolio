
import Marquee from "react-fast-marquee";
import bannerRight from "../../public/images/bannerRight.svg";

import myResume from "../../public/resume/myCv.pdf";


const Banner = () => {

    // const downloadFile = () => {
    //     // window.location.href = "../../public/resume/myCv.pdf";
    //     location.assign("../../public/resume/myCv.pdf");
    //   }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-0">
                <div className="text-neutral-content text-left pl-5 pt-10">
                    {/* <div className="w-full pl-5"> */}
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            <span className="block text-black">Hi, I am Md. Emran Hossen</span>
                        </h1>
                        <span className="block text-3xl font-bold text-blue-700 z-0 lg:inline mt-2">
                        <Marquee>
                        &nbsp;&nbsp; &nbsp; Full Stack Devoloper &nbsp;&nbsp;&nbsp; Front end developer
                        </Marquee>
                        </span>
                        <p className="mb-5 pt-5 text-black font-bold">
                            I am a Front-End / Full-Stack Developer. 
                            I am currently working at CloudStok Technologies as a Front-End Developer
                        </p>
                        {/* <button onClick={downloadFile} 
                            className="w-3/4 flex items-center 
                                    justify-center px-8 py-3 border border-transparent 
                                    text-base font-medium rounded-md text-white bg-blue-500
                                     hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                            Resume
                        </button> */}
                        <a  className="w-1/2 flex items-center 
                                    justify-center px-8 py-3 border border-transparent 
                                    text-base font-medium rounded-md text-white bg-blue-500
                                     hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        href = {myResume} target = "_blank">Resume</a>
                    {/* </div> */}
                </div>
                <div className="items-center">
                    <img src={bannerRight} className="min-w-48"></img>
                </div>

            </div>
        </div>
    );
};

export default Banner;