import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Shop = () => {
  return (
    <div className=' grid  md:grid-cols-[4fr,1fr]'>
      <div className="order-2 md:order-1 ">
        <div className="container sm:p-6 md:my-16">
          <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          </div>
        </div>
      </div>
      <ShoppingCart></ShoppingCart>
    </div>
  );
};

export default Shop;