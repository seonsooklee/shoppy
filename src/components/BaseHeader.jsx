import React from 'react';
import {AiFillShopping, AiOutlineSmallDash} from "react-icons/ai";
import {RiFolderAddFill, RiLoginCircleFill} from "react-icons/ri";
import {HiUser} from "react-icons/hi";
import {Link} from "react-router-dom";
import {login} from "../api/firebase";
import {useLogin} from '../context/LoginContext'

function BaseHeader(props) {
  const {isLogin, toggleLogin} = useLogin()
  const onclickLogin = () => {
    login()
    toggleLogin(true)
  }

  return (
    <div className={'base-header-wrapper'}>
      <Link to={'/'} className={'title'}>Shippy<div /></Link>
      <div className={'flex-1'}/>
      <div className="info-wrapper">
        <Link to={'/products'}><AiOutlineSmallDash/>Products</Link>
        <Link to={'/cart'} ><AiFillShopping/>shopping bag</Link>
        <Link to={'/update'}><RiFolderAddFill />registration</Link>
        <div className={'user-name'}><HiUser />seonsook</div>
        {
          isLogin ?
            <button><RiLoginCircleFill/>LogOut</button> :
            <button onClick={onclickLogin}><RiLoginCircleFill/>Login</button>
        }
      </div>
    </div>
  );
}

export default BaseHeader;
