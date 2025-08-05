import element from '../../../assets/tokyo-magnifier-web-search-with-elements 2.png'
import arrow from '../../../assets/Arrow 1.png'
import illustration1 from '../../../assets/Illustration (1).png'
import illustration2 from '../../../assets/Illustration (2).png'
import other from '../../../assets/tokyo-sending-messages-from-one-place-to-another 1.png'
import illustration3 from '../../../assets/Illustration (3).png'
import illustration4 from '../../../assets/Illustration (4).png'

const Services = () => {
    return (
        <div className="lg:px-24 px-4  py-12 bg-white">
            <div className="lg:flex gap-8">
                <h2 className="text-4xl w-[178px] text-black text-center h-[51px] rounded-lg bg-[#B9FF66]">Services</h2>
                <p className="text-black">
                    At our digital marketing agency, we offer a range of services to<br /> help businesses grow and succeed online. These services include:
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-16'>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-16 py-5 lg:py-10 bg-[#F3F3F3] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div className='justify-center'>
                            <h1 className="text-2xl font-bold w-[221px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">Search engine</h1>
                            <h1 className="text-2xl font-bold w-[197px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">optimization</h1>
                        </div>
                        <img
                            src={element}
                            className="mt-8 rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:ml-0 ml-6'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-black rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-black mt-2'>Learn more</p>
                    </div>
                </div>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-[70px] py-5 lg:py-10 bg-[#B9FF66] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div>
                            <h1 className="text-2xl font-bold w-[195px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">Pay-per-click</h1>
                            <h1 className="text-2xl font-bold w-[164px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">advertising</h1>
                        </div>
                        <img
                            src={illustration1}
                            className="mt-10 rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:ml-0 ml-6'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-black rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-black mt-2'>Learn more</p>
                    </div>
                </div>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-[70px] py-5 lg:py-10 bg-[#000000] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div className='justify-center'>
                            <h1 className="text-2xl font-bold w-[197px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">Social Media</h1>
                            <h1 className="text-2xl font-bold w-[147px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">Marketing</h1>
                        </div>
                        <img
                            src={illustration2}
                            className=" rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:ml-0 ml-6'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-[#ffffff] rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-white mt-2'>Learn more</p>
                    </div>
                </div>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-[88px] py-5 lg:py-10 bg-[#F3F3F3] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div className='justify-center'>
                            <h1 className="text-2xl font-bold w-[90px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">Email</h1>
                            <h1 className="text-2xl font-bold w-[161px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">Marketing</h1>
                        </div>
                        <img
                            src={other}
                            className="mt-2 rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:mt-0 mt-4 lg:ml-0 ml-3'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-black rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-black mt-2'>Learn more</p>
                    </div>
                </div>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-[100px] py-5 lg:py-10 bg-[#B9FF66] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div>
                            <h1 className="text-2xl font-bold w-[133px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">Content</h1>
                            <h1 className="text-2xl font-bold w-[137px] h-[38px] rounded-lg text-center text-black bg-[#ffffff]">Creation</h1>
                        </div>
                        <img
                            src={illustration3}
                            className="mt-2 rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:ml-0 lg:mt-0 mt-8'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-black rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-black mt-2'>Learn more</p>
                    </div>
                </div>
                <div className=" w-auto h-[350px] lg:h-[310px] border lg:px-10 px-[68px] py-5 lg:py-10 bg-[#000000] border-black border-b-4 rounded-2xl">
                    <div className="lg:flex justify-between">
                        <div className='justify-center'>
                            <h1 className="text-2xl font-bold w-[213px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">Analytics and </h1>
                            <h1 className="text-2xl font-bold w-[138px] h-[38px] rounded-lg text-center text-black bg-[#B9FF66]">Tracking</h1>
                        </div>
                        <img
                            src={illustration4}
                            className=" mt-5 rounded-lg" />

                    </div>
                    <div className='flex gap-4 lg:ml-0 ml-6'>
                        <div className='w-[41px] h-[41px] py-3 px-2 bg-[#ffffff] rounded-full'>
                            <img src={arrow} alt="" className='' />
                        </div>
                        <p className='text-white mt-2'>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;