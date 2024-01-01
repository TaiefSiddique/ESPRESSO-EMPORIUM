import { Link } from 'react-router-dom';
import navbarBg from '../../src/assets/images/more/15.jpg';
import logo from '../../src/assets/images/more/logo1.png';


const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url(${navbarBg})` }}>
            <div className="container mx-auto px-5">
                <div className='flex justify-between'>
                    <div className="flex gap-5">
                        <div className='flex items-center'>
                            <img className='w-20' src={logo} alt="" />
                        </div>
                        <div className='flex items-center mt-7'>
                            <h1 className="mb-5 text-5xl font-bold text-white font-Rancho">Espresso Emporium</h1>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <Link to='/signIn'>
                            <button className='btn bg-[#D2B48C] border-0 text-white'>Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;