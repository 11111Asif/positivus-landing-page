import Banner from "../Banner/Banner";
import Browse from "../Browse/Browse";
import Happen from "../Happen/Happen";
import Header from "../Header/Header";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Browse></Browse>
            <Services></Services>
            <Happen></Happen>
        </div>
    );
};

export default Home;