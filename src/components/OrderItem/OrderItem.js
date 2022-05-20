import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const OrderItem = () => {
  return (
    <div>

      <div className="grid grid-cols-[2fr,6fr,1fr] my-2 items-center mx-auto rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 bg-[#FFE0B3] ">
        <div className="image p-2">
          <img className="object-cover w-32 bg-black h-32 rounded-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/products/product-1.png" alt="" />
        </div>
        <div className="content">
          <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-1 text-sm font-normal text-gray-700 ">Price: $12</p>
            <p className="mb-2 text-sm font-normal text-gray-700 ">Quantity: 2</p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-black w-10 h-10 border rounded-full cursor-pointer">
          <TrashIcon className='w-8 h-8  text-white'></TrashIcon>
        </div>
      </div>

    </div>
  );
};

export default OrderItem;