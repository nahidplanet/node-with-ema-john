import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import OrderItem from '../OrderItem/OrderItem';
import useCart from '../../hooks/useCart';

const ReviewItem = () => {
  const [cart,setCart] = useCart();
  console.log(cart);
  return (
    <div className=' grid md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container p-6 md:my-16 ">
        {
          cart.map(product=><OrderItem 
            key={product._id} 
            product={product}></OrderItem>)
        }
        </div>
      </div>
      <ShoppingCart cart={cart}>
        <button className="border border-red-700 rounded-sm">check out</button>
      </ShoppingCart>
    </div>
  );
};

export default ReviewItem;
