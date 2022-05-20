import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Order = () => {
  return (
    <div className=' grid md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container sm:p-6 md:my-16">
          <OrderItem></OrderItem>

        </div>
      </div>
      <ShoppingCart></ShoppingCart>
    </div>
  );
};

export default Order;