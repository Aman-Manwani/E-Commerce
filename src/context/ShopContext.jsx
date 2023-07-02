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
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cart){
      if(cart[item]>0){
        let itemInfo = PRODUCTS.find(product => product.id === Number(item))
        totalAmount += (cart[item]*itemInfo.price);
      }
    }
    return totalAmount;
  }

  const removeFromCart = (itemId) => {
    setCart((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }

  const updateCartByInput = (newVal, itemid) => {
    setCart((prev) => ({...prev,[itemid]:newVal}));
  }

  const contextValue = {cart,addToCart,removeFromCart,updateCartByInput,getTotalCartAmount};


  return  <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider
