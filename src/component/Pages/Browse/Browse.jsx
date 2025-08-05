import logo from '../../../assets/Company logo.png'
import logo1 from '../../../assets/Company logo (1).png'
import logo2 from '../../../assets/Company logo (2).png'
import logo3 from '../../../assets/Company logo (3).png'
import logo4 from '../../../assets/Company logo (4).png'
import logo5 from '../../../assets/Company logo (5).png'


const Browse = () => {
    return (
        <div className='lg:px-24 px-4 lg:py-8 bg-white'>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-10'>
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>
        </div>
    );
};

export default Browse;