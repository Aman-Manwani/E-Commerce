import React, { useContext } from 'react'
import {PRODUCTS} from '../../products/products'
import {ShopContext} from '../../context/ShopContext'
import CartProduct from '../cartItem/CartProduct'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart,getTotalCartAmount } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
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
        {
          TotalAmount>0 ?
          <div className='checkout'>
            <p className='subtotal'>
              SubTotal : ${TotalAmount}
            </p>
            <div className='payment'>
              <Link to='/'><button className='btn continue_shop'>Continue Shopping</button></Link>
              <button className='btn checkout_btn'>Payment</button>
            </div>
          </div> :
          <div className='empty_cart'>
            <p className='empty_cart_head'>Your Cart Is Empty, Go Grab Some Items</p>
            <Link to='/'><button className='btn'>Continue Shopping</button></Link>
          </div>
        }
    </div>
  )
}

export default Cart
