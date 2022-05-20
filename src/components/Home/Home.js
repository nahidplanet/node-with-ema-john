import React from 'react';
import banner from '../../images/home.png';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
const Home = () => {
  return (
    <div className=' grid md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container sm:p-6 md:my-16">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="w-10/12 md:w-7/12 text-center sm:text-left pl-6">
              <h6 className='text-yellow-600 text-sm font-bold mt-10 md:mt-0'>Sale up to 70% off</h6>
              <h1 className='mb-4 mt-6 text-[#1C2B35] text-5xl font-bold'>New Collection For Fall</h1>
              <p className='text-[#1C2B35] text-md'>Discover all the new arrivals of ready-to-wear collection.</p>
              <button className='text-sm font-bold px-4 py-2.5 text-[#1C2B35] bg-yellow-600 border mt-10 rounded-lg'>SHOP NOW</button>
            </div>
            <div className="banner mt-10 sm:mt-0 w-10/12 md:w-5/12" >
              <div className="w-[275px] h-[385px] drop-shadow-2xl flex justify-center mx-auto" style={{ boxShadow: "-13px 21px 7px 4px rgba(255,224,179,0.9)" }}>
                <img className='w-full h-full' src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShoppingCart></ShoppingCart>

    </div>
  );
};

export default Home;



;