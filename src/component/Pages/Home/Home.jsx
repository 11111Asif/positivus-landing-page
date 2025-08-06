import Banner from "../Banner/Banner";
import Browse from "../Browse/Browse";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Happen from "../Happen/Happen";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Studies from "../Studies/Studies";
import Team from "../Team/Team";
import Working from "../Working/Working";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Browse></Browse>
            <Services></Services>
            <Happen></Happen>
            <Studies></Studies>
            <Working></Working>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;