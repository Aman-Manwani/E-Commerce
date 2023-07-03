import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../../products/products';
import './Description.css';

const Description = () => {
    const {id} = useParams();
    const itemInfo = PRODUCTS[id-1];
  return (
    <div className='desc_div'>
      <img src={itemInfo.productImage} alt="product_image" className='productDesc_image' />
      <div className='info_div'>
        <p className='desc_Pname'>{itemInfo.productName}</p>
        <p className='desc_Pdesc'>{itemInfo.description}</p>
        <p className='desc_Pprice'>${itemInfo.price}</p>
        <Link to='/'><button className='btn'>Back To Shop</button></Link>
      </div>
    </div>
  )
}

export default Description
