import linkedin from '../../../assets/linkedin.png'
import picture from '../../../assets/Picture.png'
import picture1 from '../../../assets/Picture (1).png'
import picture2 from '../../../assets/Picture (2).png'
import picture3 from '../../../assets/Picture (3).png'
import picture10 from '../../../assets/picture10.png'
import picture4 from '../../../assets/Picture (4).png'

const Team = () => {
    return (
        <div className="lg:px-24 px-4 py-10 bg-white">
            <div className="lg:flex gap-4">
                <h1 className="text-4xl text-black w-[101px] h-[51px] text-center bg-[#B9FF66] rounded-2xl">Team</h1>
                <p className="text-black">Meet the skilled and experienced team behind our<br /> successful digital marketing strategies</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                <div className=" w-auto h-[331px] py-8 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture} alt="" className='w-[105px] h-[102px]' />
                        <div className='mt-7'>
                            <p className=" font-bold text-black">John Smith</p>
                            <p className="text-black">CEO and Founder</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-10 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='py-6 text-black'>
                        10+ years of experience in digital<br/> marketing. Expertise in SEO, PPC,<br/> and content strategy
                    </p>
                </div>
                <div className=" w-auto h-[331px] py-8 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture1} alt="" className='w-[105px] h-[102px]' />
                        <div className='mt-7'>
                            <p className=" font-bold text-black">Jane Doe</p>
                            <p className="text-black">Director of Operations</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-10 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='py-6 text-black'>
                         7+ years of experience in project<br/> management and team leadership.<br/> Strong organizational and<br/> communication skills
                    </p>
                </div>
                <div className=" w-auto h-[331px] py-8 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture2} alt="" className='w-[105px] h-[102px]' />
                        <div className='mt-1'>
                            <p className=" font-bold text-black">Michael Brown</p>
                            <p className="text-black">Senior SEO Specialist</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-10 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='py-6 text-black'>
                        5+ years of experience in SEO and<br/> content creation. Proficient in<br/> keyword research and on-page<br/> optimization
                    </p>
                </div>
                <div className=" w-auto h-[331px] py-8 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture3} alt="" className='w-[105px] h-[102px]' />
                        <div className='mt-1'>
                            <p className=" font-bold text-black">Emily Johnson</p>
                            <p className="text-black">PPC Manager</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-14 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='py-6 text-black'>
                          3+ years of experience in paid<br/> search advertising. Skilled in<br/> campaign management and<br/> performance analysis
                    </p>
                </div>
                <div className=" w-auto h-[331px] py-6 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture10} alt="" className='w-[105px] h-[102px]' />
                        <div className='lg:mt-1'>
                            <p className=" font-bold text-black">Brian Williams</p>
                            <p className="text-black">Social Media<br/> Specialist</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-14 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='py-6 text-black'>
                        4+ years of experience in social<br/> media marketing. Proficient in<br/> creating and scheduling content,<br/> analyzing metrics, and building<br/> engagement
                    </p>
                </div>
                <div className=" w-auto h-[331px] py-8 px-5 rounded-3xl shadow-2xl border border-b-4 border-black">
                    <div className='flex gap-3'>
                        <img src={picture4} alt="" className='w-[105px] h-[102px]' />
                        <div className='mt-7'>
                            <p className=" font-bold text-black">Sarah Kim</p>
                            <p className="text-black">Content Creator</p>
                        </div>
                        <div className='w-[34px] px-2 py-2 h-[34px] ml-14 rounded-full bg-black'>
                            <img src={linkedin} alt="" className='w-[17px] h-[17px]' />
                        </div>
                    </div>
                    <div className='border border-black mt-8'></div>
                    <p className='mt-6 text-black'>
                        2+ years of experience in writing<br/> and editing
                    </p>
                    <p className='text-black'>Skilled in creating compelling, SEO<br/> -optimized content for various<br/> industries</p>
                </div>
            </div>
            <div className='w-[269px] h-[68px] bg-black py-4 px-20 rounded-2xl mt-6 mx-auto '>
                <button className='text-white text-xl'>See all team</button>
            </div>
        </div>
    );
};

export default Team;