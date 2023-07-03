import React, { useContext } from 'react'
import './ProductCard.css';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {id,productName,price,productImage} = props.data;
  const {cart,addToCart} = useContext(ShopContext);
  const cartItems = cart[id];
  return (
    <div className='product'>
        <img src={productImage} alt='product' className='product_img' />
        <div className='product_name'>
            {productName}
        </div>
        <div className='product_price'>
            ${price}
        </div>
        <div className='product-btns'>
            <Link to = {`/product/${id}`}>
                <button className='view_more_btn btn'>
                    View More ...
                </button>
            </Link>
            <button className='cart_btn btn' onClick={() => addToCart(id)}>
                Add To Cart {cartItems>0 && <span>({cartItems})</span>}
            </button>
        </div>
    </div>
  )
}

export default ProductCard
