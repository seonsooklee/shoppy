import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProduct} from "../api/firebase";

function Detail() {
  const [product, setProduct] = useState();
  const {id} = useParams()

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
  }, [id]);

  return (
    <div className={'detail-item-wrapper'}>
      <img src={product?.url} alt=""/>
      <div className="info-wrapper">
        <div className="business-name">- {product?.company}</div>
        <div className="name">{product?.name}</div>
        <div className="price">{product?.price.toLocaleString()}</div>
        <div className="description">{product?.description}</div>
        <div className='select-wrapper'>
          <label htmlFor="options">Choose a option</label>
          <select id="options">
            <option value="">--Please choose an option--</option>
            {
              product?.options.split(',').map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))
            }
          </select>
        </div>
        <hr className='divider'/>
        <button>장바구니 담기</button>
      </div>
    </div>
  );
}

export default Detail;
