import icon from '../../../assets/Icon.png'

const Header = () => {
    return (
        <div className='lg:flex  justify-between lg:space-y-0 space-y-3 bg-white lg:px-24 py-3'>
            <div className='flex gap-3 justify-center items-center'>
                <img src={icon} alt="" className='w-[36px] h-[36px]' />
                <h2 className="text-4xl text-black font-bold">Positivus</h2>
            </div>
            <div className='lg:flex lg:space-y-0 space-y-3'>
                <ul className='flex lg:gap-5 gap-3 justify-center items-center'>
                    <li className='text-black'><a>About us</a></li>
                    <li className='text-black'><a>Services</a></li>
                    <li className='text-black'><a>Use Cases</a></li>
                    <li className='text-black'><a>Pricing</a></li>
                    <li className='text-black'><a>Blog</a></li>
                </ul>
                <div className='w-[231px] mx-auto lg:ml-10 py-2 text-center lg:py-5 px-14 rounded-2xl h-[48px] lg:h-[68px] border border-black'>
                    <button className='text-black rounded-lg'>Request a quote</button>
                </div>
            </div>
        </div>
    );
};

export default Header;