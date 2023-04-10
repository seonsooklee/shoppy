import React from 'react';
import {AiFillShopping, AiOutlineSmallDash} from "react-icons/ai";
import {RiFolderAddFill, RiLoginCircleFill} from "react-icons/ri";
import {HiUser} from "react-icons/hi";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function BaseHeader() {
  const {user, login, logout} = useAuth()

  return (
    <div className={'base-header-wrapper'}>
      <Link to={'/'} className={'title'}>Shippy</Link>
      <div className={'flex-1'}/>
      <div className="info-wrapper">
        <Link to={'/products'}><AiOutlineSmallDash/>Products</Link>
        {user && <Link to={'/cart'}><AiFillShopping/>shopping bag</Link>}
        {user && user.isAdmin && <Link to={'/product/new'}><RiFolderAddFill/>registration</Link>}
        {
          user ?
            <>
              <div className={'user-name'}><HiUser/>{user.displayName}</div>
              <button onClick={logout}><RiLoginCircleFill/>LogOut</button>
            </> :
            <button onClick={login}><RiLoginCircleFill/>Login</button>
        }
      </div>
    </div>
  );
}

export default BaseHeader;
