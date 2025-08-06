import vector from '../../../assets/Vector.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="lg:px-24 px-4 bg-black py-8">
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img src={vector} alt="" />
                    <h2 className="text-3xl text-white font-bold">Positivus</h2>
                </div>
                
                    <ul className='flex lg:gap-5 items-center gap-3'>
                        <li className='text-white underline'><a>About us</a></li>
                        <li className='text-white underline'><a>Services</a></li>
                        <li className='text-white underline'><a>Use Cases</a></li>
                        <li className='text-white underline'><a>Pricing</a></li>
                        <li className='text-white underline'><a>Blog</a></li>
                    </ul>
                
                <div className='flex items-center gap-3'>
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
        </div>
    );
};

export default Footer;