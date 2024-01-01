import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { CiCoffeeCup } from 'react-icons/ci';

import image1 from '../src/assets/images/cups/Rectangle 10.png';
import image2 from '../src/assets/images/cups/Rectangle 11.png';
import image3 from '../src/assets/images/cups/Rectangle 12.png';
import image4 from '../src/assets/images/cups/Rectangle 13.png';
import image5 from '../src/assets/images/cups/Rectangle 14.png';
import image6 from '../src/assets/images/cups/Rectangle 15.png';
import image7 from '../src/assets/images/cups/Rectangle 16.png';
import image8 from '../src/assets/images/cups/Rectangle 9.png';
import Footer from './components/Footer';


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='container mx-auto my-20'>
        <p className='text-center font-Raleway text-xl'>--- Sip & Savor ---</p>
        <h1 className='text-5xl font-bold text-center my-3 font-Rancho mb-5'>Our Popular Products</h1>

        <div className='flex justify-center mb-10'>
          <Link to='/addCoffee'>
            <button className='btn bg-[#E3B577] border-black text-white text-xl font-Rancho'>
              Add Coffee
              <CiCoffeeCup className='text-2xl'></CiCoffeeCup>
            </button>
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>


      <div className='container mx-auto my-20'>
        <p className='text-center font-Raleway text-xl'>--- Follow Us Now ---</p>
        <h1 className='text-5xl font-bold text-center my-3 font-Rancho mb-5'>Follow on Instagram</h1>


        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
            <img className='w-full' src={image1} alt="" />
            <img className='w-full' src={image2} alt="" />
            <img className='w-full' src={image3} alt="" />
            <img className='w-full' src={image4} alt="" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <img className='w-full' src={image5} alt="" />
            <img className='w-full' src={image6} alt="" />
            <img className='w-full' src={image7} alt="" />
            <img className='w-full' src={image8} alt="" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
