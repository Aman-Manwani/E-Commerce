import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../products/products'
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for(let i = 1;i<PRODUCTS.length+1;i++){
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cart,setCart] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCart((prev) => ({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
    setCart((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextValue = {cart,addToCart,removeFromCart};

  console.log(cart)

  return  <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider
