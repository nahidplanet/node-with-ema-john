import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilitis/fakedb';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Shop = () => {
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();




  useEffect(() => {
    const url = `http://localhost:5000/productCount`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const count = Math.ceil(data.count / perPage);
        setPageCount(count);
      })
  }, [perPage]);

  useEffect(() => {
    const url = `http://localhost:5000/product?page=${page}&perpage=${perPage}`;
    fetch(url)
      .then(res => res.json())
      .then(data =>{ 
        setProducts(data)
        
      })
  },[perPage, page]);


  const handleCart = (selectedProduct) => {
    let newCart = [];
    const exiest = cart.find(product => product._id === selectedProduct._id);
    console.log(exiest);
    if (!exiest) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exiest.quantity = exiest.quantity + 1;
      newCart = [...rest, exiest];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  }


  return (
    <div>
      <div className=' grid  md:grid-cols-[4fr,1fr]'>
        <div className="order-2 md:order-1 ">
          <div className="container sm:p-6 md:my-16">
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
              {
                products.map(product => <ProductCard key={product._id} addToCart={handleCart} product={product}></ProductCard>)
              }

            </div>
          </div>
          <div className='flex justify-center'>
            <div className="pagination flex justify-center">
              {

                [...Array(pageCount).keys()]
                  .map(number => <button
                    className={`"border rounded py-3 px-4 mr-4" ${number === page ? "bg-yellow-700 text-white font-bold" : "bg-white font-bold"}`}
                    onClick={() => setPage(number)}
                    key={number} >{number}
                  </button>)

              }
            </div>
            <div className="per-page border rounded-md px-3 py-2">

              <p></p>
              <select onChange={(e) => setPerPage(parseInt(e.target.value))}>
                <option value="10">10</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
        <ShoppingCart cart={cart} >
          <Link to={'/review'}>
          <button className='border border-red-700 rounded-sm'> Review Order</button>
          </Link>
        </ShoppingCart>
      </div>

    </div>
  );
};

export default Shop;