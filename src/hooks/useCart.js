import React, { useEffect, useState } from 'react';
import { localSotrageData } from '../utilitis/fakedb';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getlocalStorageData = localSotrageData();
    const saveProduct = [];
    const keys = Object.keys(getlocalStorageData);

    const url = `http://localhost:5000/productbykeys`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(keys)
    })
      .then(res => res.json())
      .then(products => {
        for (const id in getlocalStorageData) {
          const addProduct = products.find(product => product._id === id);
          if (addProduct) {
            const quantity = getlocalStorageData[id];
           addProduct.quantity = quantity;
           saveProduct.push(addProduct);
          }
        }
        setCart(saveProduct);
      });
  }, []);

  return [cart, setCart]
};

export default useCart;