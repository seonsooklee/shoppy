import React from 'react';
import ProductItem from "../components/ProductItem";

function Products(props) {
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
  return (
    <div className={'products-wrapper'}>
      {
        data.map((item, index) => (
          <ProductItem key={index}/>
        ))
      }
    </div>
  );
}

export default Products;
