import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {addCart, getProduct} from "../api/firebase";
import {useAuth} from "../context/AuthContext";

function Detail() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);
  const [option, setOption] = useState()
  const {id} = useParams()
  const {user} = useAuth()

  const handleOption = (e) => {
    setOption(e.target.value)
  }

  const onClickAddCart = () => {
    const userId = user.uid
    const item = {...product, chooseOption: option, count}
    addCart(item, userId)
      .then((res) => console.log(res))
  }

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
          <select id="options" value={option} onChange={handleOption} required>
            <option value="">--Please choose an option--</option>
            {
              product?.options.split(',').map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))
            }
          </select>
        </div>
        <input type="number" name='count' value={count} placeholder={'수량'} onChange={()=>setCount}/>
        <hr className='divider'/>
        <button onClick={onClickAddCart}>장바구니 담기</button>
      </div>
    </div>
  );
}

export default Detail;
