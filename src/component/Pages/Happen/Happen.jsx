import frame from '../../../assets/Frame 19.png'

const Happen = () => {
    return (
        <div className="lg:px-24 px-4 bg-white">
            <div className="hero bg-[#F3F3F3] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={frame}
                        className="lg:w-[494px] w-[345px] h-[394px] rounded-lg" />
                    <div className="lg:w-[500px]">
                        <h1 className="lg:text-3xl text-2xl text-black font-bold">Let’s make things happen</h1>
                        <p className="py-6 text-black">
                           Contact us today to learn more about how our digital<br/> marketing services can help your business grow and<br/> succeed online.
                        </p>
                        <button className="w-[288px] h-[68px] bg-black rounded-2xl text-center">Get your free proposal</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Happen;