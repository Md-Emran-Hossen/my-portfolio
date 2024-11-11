
import Banner from "../shared/Banner";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>  
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;