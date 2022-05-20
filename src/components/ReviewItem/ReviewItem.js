import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const ReviewItem = () => {
  return (
    <div className=' grid md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container sm:p-6 md:my-16">

        </div>
      </div>
      <ShoppingCart></ShoppingCart>
    </div>
  );
};

export default ReviewItem;