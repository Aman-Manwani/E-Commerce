import React from "react";
import "./Header.css";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="inner-nav">
        <div className="logo"><Link style={{color:"inherit",textDecoration:'none'}} to='/'>Aman's Ecommerce</Link></div>
        <div className="nav-right-comp">
          <Link style={{color:"inherit",textDecoration:'none'}} to='/cart'><ShoppingCartIcon className="cart-icon"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
