import { MdArrowOutward } from "react-icons/md";

const Studies = () => {
    return (
        <div className="lg:px-24 px-6 py-20 bg-white">
            <div className="lg:flex gap-5">
                <h2 className="lg:text-4xl text-2xl lg:w-[251px] w-[200px] rounded-2xl text-center h-[40px] lg:h-[51px] bg-[#B9FF66] text-black">Case Studies</h2>
                <p className="text-black lg:py-0 py-4">
                    Explore Real-Life Examples of Our Proven Digital Marketing<br /> Success through Our Case Studies
                </p>
            </div>
            <div className="lg:flex  w-auto h-[700px] lg:h-[326px] mt-12 rounded-2xl bg-black">
                <div className="lg:w-[386px] w-[310px] h-[163px] px-10 py-16">
                    <div className="lg:border-r-2 border-white h-[186px] ">
                        <p className="text-white">
                            For a local restaurant, we<br /> implemented a targeted PPC<br /> campaign that resulted in a 50%<br /> increase in website traffic and a<br /> 25% increase in sales.
                        </p>
                        <div className='flex gap-2 py-6'>
                            <p className="text-[#B9FF66] text-xl">Learn more</p>
                            <MdArrowOutward className="text-xl text-[#B9FF66] mt-2"></MdArrowOutward>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[386px] w-[310px] h-[163px] lg:mt-0 mt-8 px-10 py-16">
                    <div className="lg:border-r-2 border-white h-[186px] ">
                        <p className="text-white">
                            For a B2B software company, we<br/> developed an SEO strategy that<br/> resulted in a first page ranking<br/> for key keywords and a 200%<br/> increase in organic traffic.
                        </p>
                        <div className='flex gap-2 py-6'>
                            <p className="text-[#B9FF66] text-xl">Learn more</p>
                            <MdArrowOutward className="text-xl text-[#B9FF66] mt-2"></MdArrowOutward>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[386px] w-[310px] h-[163px] lg:mt-0 mt-8 px-10 py-16">
                    
                        <p className="text-white">
                            For a national retail chain, we<br/> created a social media<br/> marketing campaign that<br/> increased followers by 25% and<br/> generated a 20% increase in<br/> online sales.
                        </p>
                        <div className='flex gap-2 py-6'>
                            <p className="text-[#B9FF66] text-xl">Learn more</p>
                            <MdArrowOutward className="text-xl text-[#B9FF66] mt-2"></MdArrowOutward>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Studies;