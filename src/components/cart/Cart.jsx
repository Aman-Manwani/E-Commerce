import React, { useContext } from 'react'
import {PRODUCTS} from '../../products/products'
import {ShopContext} from '../../context/ShopContext'
import CartProduct from '../cartItem/CartProduct'
import './Cart.css'

const Cart = () => {
  const { cart } = useContext(ShopContext);
  return (
    <div className='cart'>
      <div className='cart_head'>
        <h1 className='cart_head'>Your Saved Items</h1>
      </div>
      <div className='cart_items'>
        {
          PRODUCTS.map((product) => {
              if(cart[product.id]!==0){
                return <CartProduct data = {product}/>;
              }
            })
        }
      </div>
    </div>
  )
}

export default Cart
