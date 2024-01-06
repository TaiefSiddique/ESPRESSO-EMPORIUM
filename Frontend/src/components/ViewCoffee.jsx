import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CoffeeCardSingle from "./CoffeeCardSingle";

const ViewCoffee = () => {
    const coffee = useLoaderData();
    //const { _id, name, supplier, category, taste, quantity, details, photo } = coffee;
    console.log(coffee);
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
            <CoffeeCardSingle
                key={coffee._id}
                coffee={coffee}
            ></CoffeeCardSingle>

            <Footer></Footer>
        </div>
    );
};

export default ViewCoffee;