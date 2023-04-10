import React, {useEffect, useState} from 'react';
import ProductItem from "../components/ProductItem";
import {getProducts} from "../api/firebase";

function AllProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        console.log(data)
      })
  }, [])

  return (
    <div className={'products-wrapper'}>
      {
        products.map((item) => (
          <ProductItem key={item.id} item={item}/>
        ))
      }
    </div>
  );
}

export default AllProducts;
