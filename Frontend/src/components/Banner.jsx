import bannerBg from '../../src/assets/images/more/3.png';

import icon1 from '../../src/assets/images/icons/1.png';
import icon2 from '../../src/assets/images/icons/2.png';
import icon3 from '../../src/assets/images/icons/3.png';
import icon4 from '../../src/assets/images/icons/4.png';

const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${bannerBg})`, placeItems: 'normal' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="py-56">
                    <div className="flex justify-end text-white container mx-auto px-5">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold font-Rancho">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5 font-Raleway">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className="btn bg-[#E3B577] border-0 text-black font-Rancho">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#ECEAE3]'>
                <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16'>
                    <div>
                        <div className='flex justify-center'>
                            <img src={icon1} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mt-3 font-Rancho'>Awesome Aroma</h2>
                        <p className='text-center font-Raleway' >You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>

                    <div>
                        <div className='flex justify-center'>
                            <img src={icon2} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mt-3 font-Rancho'>High Quality</h2>
                        <p className='text-center font-Raleway' >We served the coffee to you maintaining <br /> the best quality</p>
                    </div>

                    <div>
                        <div className='flex justify-center'>
                            <img src={icon3} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mt-3 font-Rancho'>Pure Grades</h2>
                        <p className='text-center font-Raleway' >The coffee is made of the green coffee <br /> beans which you will love</p>
                    </div>

                    <div>
                        <div className='flex justify-center'>
                            <img src={icon4} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mt-3 font-Rancho'>Proper Roasting</h2>
                        <p className='text-center font-Raleway' >Your coffee is brewed by first roasting <br /> the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;