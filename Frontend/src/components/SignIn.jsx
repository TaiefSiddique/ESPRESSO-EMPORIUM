import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const SignIn = () => {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

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

            <div className=" py-10">
                <div className="flex justify-center my-12 container mx-auto px-5">
                    <div className="bg-gray-50 rounded-xl w-full md:w-3/4 lg:w-2/4 py-8">
                        <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className="text-[#D2B48C]">SignIn</span> your account</h2>
                        <form onSubmit={handleSignIn} className="px-4 md:px-14">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C] border-[#D2B48C] hover:bg-white hover:text-[#D2B48C] text-white font-bold">SignIn</button>
                            </div>
                        </form>


                        <div className="flex justify-center mb-4">
                            <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Do not have an account? <Link to='/signUp' className="text-[#D2B48C] underline font-bold">Sign Up</Link></h2>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SignIn;