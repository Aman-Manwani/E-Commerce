import React, { useContext } from 'react'
import './CartProduct.css'
import { ShopContext } from '../../context/ShopContext';

const CartProduct = (props) => {
  const {id,productName,price,productImage} = props.data;
  const {cart,addToCart,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart_item'>
      <img src={productImage} alt="Cartitem" className='cartitem_img' />
      <div className='cartitem_desc'>
        <p className='cartitem_name'>
          {productName}
        </p>
        <p className='cartitem_price'>
          ${price}
        </p>
        <div className='inc_dec_div'>
          <button className='remove_btn add_rm_btn' onClick={() =>removeFromCart(id) }>-</button>
          <input className='item_quantity' value={cart[id]}/>
          <button className='remove_btn add_rm_btn' onClick={()=> addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
