import React from 'react';
import image from '../images/5.webp'
import {useNavigate} from "react-router-dom";

function ProductItem(props) {
  const navigate = useNavigate()
  return (
    <div className={'product-item-wrapper'} onClick={() => navigate('/products/detail')}>
      <div className="image-wrapper">
        <img src={image} alt="product"/>
      </div>
      <div className="info-wrapper">
        <div className="business-name">유라고</div>
        <div className={'name'}>reversible shirts</div>
        <div className={'price'}>120,000</div>
      </div>
    </div>
  );
}

export default ProductItem;
