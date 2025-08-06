import vector from '../../../assets/Vector.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="lg:px-24 px-4 bg-black py-8">
            <div className='lg:flex justify-between lg:space-y-0 space-y-3'>
                <div className='flex justify-center gap-3'>
                    <img src={vector} alt="" />
                    <h2 className="text-3xl text-white font-bold">Positivus</h2>
                </div>
                
                    <ul className='flex lg:gap-5 justify-center items-center gap-3'>
                        <li className='text-white underline'><a>About us</a></li>
                        <li className='text-white underline'><a>Services</a></li>
                        <li className='text-white underline'><a>Use Cases</a></li>
                        <li className='text-white underline'><a>Pricing</a></li>
                        <li className='text-white underline'><a>Blog</a></li>
                    </ul>
                
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-[30px] h-[30px] rounded-full py-1.5 px-1.5 bg-white'>
                        <FaLinkedinIn className='text-black'></FaLinkedinIn>
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full py-1.5 px-1.5 bg-white'>
                        <FaFacebookF className='text-black'></FaFacebookF>
                    </div>
                    <div className='w-[30px] h-[30px] rounded-full py-1.5 px-2 bg-white'>
                        <FaTwitter className='text-black'></FaTwitter>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-between mt-12'>
                <div className='text-center lg:text-start'>
                    <h2 className="text-xl bg-[#B9FF66] lg:mx-0 mx-auto text-black rounded-lg w-[126px] h-[26px] text-center">Contact us</h2>
                    <p className='text-white py-3'>Email: info@positivus.com</p>
                    <p className='text-white py-3'>Phone: 555-567-8901</p>
                    <p className='text-white'>Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</p>
                    
                </div>
                <div className='lg:w-[634px] lg:mt-0 mt-4 h-[184px] rounded-3xl py-[20px] lg:py-[54px] px-[40px] bg-[#292A32]'>
                    <div className='lg:flex gap-4'>
                        <input type="email" name='email' placeholder='Email' className='w-[275px] h-[67px] px-3 rounded-2xl border border-white' required />
                        <div className='w-[249px] h-[68px] lg:mt-0 mt-4 rounded-2xl py-5 px-14 bg-[#B9FF66]'>
                            <button className='text-black'>Subscribe to news</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 border-white mt-16'></div>
            <div className='lg:flex text-center mt-10'>
                <p className='text-white'>© 2023 Positivus. All Rights Reserved.</p>
                <p className='text-white lg:ml-16 underline'>Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;