import React, { useState } from 'react';

const ShoppingCart = () => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(true);

  return (
    <div className='order-1 md:order-2   '>
      <button className='hidden ' onClick={() => setModal(!modal)}></button>
      {modal ?
        <>
          <button
            className="block md:hidden bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Show Cart
          </button>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Cart Details
                      </h3>
                      
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="my-4 text-slate-500 text-lg leading-relaxed">
                       <h1>Product</h1>
                       <h1>Product</h1>
                       <h1>Product</h1>
                       <h1>Product</h1>
                       <h1>Product</h1>
                       <h1>Product</h1>
                      </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) :

            <div className="hidden md:block order-1 sm:order-2 h-full bg-[#FFE0B3] sm:h-screen sm:mt-16 md:mt-0 py-7 px-6 md:sticky top-0 mb-10 md:mb-0  ">
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
              <h1>PRODUCT : </h1>
            </div>
          }

        </>
        :
        null
      }
    </div>
  );
};

export default ShoppingCart;