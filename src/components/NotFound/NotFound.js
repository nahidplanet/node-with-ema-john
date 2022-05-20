import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/notfound.png'
const NotFound = () => {
  return (
    <div>
     <div className=" mx-auto   w-10/12 h-screen">
       <img className=' mx-auto w-full h-screen' src={NotFoundImg} alt="notfound" />
     </div>
     <div className='text-center mt-3'>
     <button className='px-3 py-2 border rounded-md bg-gray-800 mx-auto text-white font-bold text-xl text-center '><Link to={'/home'}> Home</Link></button>

     </div>
    </div>
  );
};

export default NotFound;