
// import Navbar from "../shared/NavBar";
// import Banner from "../shared/Banner";
// import Services from "./Services";
// import Projects from "./Projects";
// import Contact from "./Contact";

const About = () => {
    return (
        <div>
            <p className="text-5xl font-bold text-center mt-10 p-10">About Me</p>
            <diV className="p-3">
                <h2 className="text-2xl font-bold text-blue-500">A bit about me</h2>
            </diV>
            <div className="p-3">
                <p>
                    I am a self-taught web developer and Mobile App Developer with experience 
                    in designing new features from ideation to production, 
                    implementation of wireframes and design flows into high performance 
                    software applications. I take into consideration the user experience 
                    while writing reusable and efficient code. I passionately combine 
                    good design, technology, and innovation in all my projects, 
                    which I like to accompany from the first idea to release.Currently, 
                    I am focused on the backend development.
                </p>
            </div>
            <diV className="p-3">
                <h2 className="text-2xl font-bold text-blue-500">Technologies and Tools</h2>
            </diV>
            <div className="p-3">
                <p>
                    Using a combination of cutting-edge technologies and reliable open-source 
                    software I build user-focused, performant apps and websites for smartphones, 
                    tablets, and desktops.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5">


            </div>
             {/* <Navbar></Navbar>
             <Banner></Banner> */}
            {/* <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>  */}
        </div>
    );
};

export default About;