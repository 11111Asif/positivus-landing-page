import icon from '../../../assets/Icon.png'

const Header = () => {
    return (
        <div className='flex justify-between bg-white lg:px-24 py-3'>
            <div className='flex gap-3 items-center'>
                <img src={icon} alt="" className='w-[36px] h-[36px]' />
                <h2 className="text-4xl text-black font-bold">Positivus</h2>
            </div>
            <div className='flex '>
                <ul className='flex gap-5 items-center'>
                    <li className='text-black'><a>About us</a></li>
                    <li className='text-black'><a>Services</a></li>
                    <li className='text-black'><a>Use Cases</a></li>
                    <li className='text-black'><a>Pricing</a></li>
                    <li className='text-black'><a>Blog</a></li>
                </ul>
                <div className='w-[231px] ml-10 py-5 px-14 rounded-2xl h-[68px] border border-black'>
                    <button className='text-black rounded-lg'>Request a quote</button>
                </div>
            </div>
        </div>
    );
};

export default Header;