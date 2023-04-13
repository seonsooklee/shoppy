import React from 'react';
import {getCart} from "../api/firebase";
import {useAuth} from "../context/AuthContext";
import {useQuery} from '@tanstack/react-query';

function Cart() {
  const {user} = useAuth()
  const userId = user.uid
  const {data: products} = useQuery(['cart'], () => getCart(userId))
  const totalPrice = () => {
    return products?.reduce(
      (acc, cur) => acc + (cur.count * cur.price)
      , 0).toLocaleString()
  }

  return (
    <div className='cart-wrapper'>
      <div className="label">Shopping Bag</div>
      {products?.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.url} alt=""/>
          <div className="name">{item.name}</div>
          <div className="option">{item.chooseOption}</div>
          <div className="count">{item.count}</div>
          {/*<button>삭제</button>*/}
        </div>
      ))}
      <div className="total-wrapper">
        <div className="label">Total</div>
        <div className="price">{totalPrice()}</div>
      </div>
    </div>
  );
}

export default Cart;
