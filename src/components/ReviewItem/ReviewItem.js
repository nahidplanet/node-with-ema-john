import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import OrderItem from '../OrderItem/OrderItem';

const ReviewItem = () => {
  return (
    <div className=' grid md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container p-6 md:my-16 ">
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        <OrderItem></OrderItem>
        </div>
      </div>
      <ShoppingCart></ShoppingCart>
    </div>
  );
};

export default ReviewItem;
