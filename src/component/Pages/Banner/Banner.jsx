import illustration from '../../../assets/Illustration.png'

const Banner = () => {
    return (
        <div className='lg:px-24 py-8 bg-white '>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={illustration}
                        className="lg:w-[600px]  w-[310px] h-[350px] lg:h-[400px] rounded-lg " />
                    <div className=' lg:w-[400px] w-[310px]'>
                        <h1 className="lg:text-5xl text-4xl font-bold text-black">Navigating the<br/> digital landscape<br/> for success</h1>
                        <p className="py-6 text-black">
                           Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                        <button className="lg:w-[264px] w-[200px] h-[48px] lg:h-[68px] bg-black rounded-2xl text-white">Book a consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;