import React from 'react';
import {useNavigate} from "react-router-dom";

function ProductItem({item}) {
  const navigate = useNavigate()
  return (
    <div className={'product-item-wrapper'} onClick={() => navigate(`/product/${item.id}`)}>
      <div className="image-wrapper">
        <img src={item.url} alt="product"/>
      </div>
      <div className="info-wrapper">
        <div className="business-name">{item.company}</div>
        <div className={'name'}>{item.name}</div>
        <div className={'price'}>{item.price.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default ProductItem;
