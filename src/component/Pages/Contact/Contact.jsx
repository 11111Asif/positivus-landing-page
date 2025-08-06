import frame from '../../../assets/Frame 19.png'

const Contact = () => {
    return (
        <div className="lg:px-24 px-2 py-10 bg-white">
            <div className="lg:flex gap-3">
                <h1 className="text-4xl w-[229px] text-black bg-[#B9FF66] h-[51px] text-center rounded-2xl">Contact Us</h1>
                <p className="text-black">
                    Connect with Us: Let's Discuss Your<br /> Digital Marketing Needs
                </p>
            </div>
            <div className="mt-10 ">
                <div className="hero bg-[#F3F3F3] rounded-3xl py-12">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:w-[450px] w-[310px] lg:ml-10 lg:text-left">
                           <img src={frame} alt="" />
                        </div>
                        <div className="card lg:w-[556px] w-[310px] shrink-0">
                            <div className="flex gap-5 lg:gap-8 ml-7">
                                <div className="flex gap-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" defaultChecked />
                                    <p className="text-black">Say Hi</p>
                                </div>
                                <div className="flex gap-3">
                                    <input type="radio" name="radio-5" className="radio radio-success" />
                                    <p className="text-black">Get a Quote</p>
                                </div>
                            </div>
                            <form className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" className="lg:w-[556px] w-[300px] px-3 rounded-2xl bg-[#ffffff] text-black border-2 border-black h-[59px]" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" className="lg:w-[556px] w-[300px] px-3 rounded-2xl bg-[#ffffff] text-black border-2 border-black h-[59px]" required />
                                </div>
                                <div className="form-control">
                                    <input type="Message*" placeholder="Message*" className="lg:w-[556px] w-[300px] px-3 rounded-2xl bg-[#ffffff] text-black border-2 border-black h-[190px]" required />
                                </div>
                                <div className="mt-6 lg:w-[556px] w-[300px] h-[68px] bg-black rounded-2xl py-4 px-[85px] lg:px-[200px]">
                                    <button className="text-white text-xl">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;