import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import errorPage from '../assets/images/404/404.gif';
import { AiOutlineArrowLeft } from "react-icons/ai";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto px-10 mt-10 flex gap-3'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
                    </Link>
                </div>
                <h3 className='font-Rancho text-2xl'>Back to Home</h3>
            </div>

            <div className=" flex items-center justify-center">
                <div className="text-center">
                    <img className="py-10" src={errorPage} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;