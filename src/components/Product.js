import React from 'react'
import { products } from '../data/Products'
import '../sass/Product.scss'

function Product() {
  return (
    <div className='product-card'>
        <div className='name-image'>
            <div>ProductName</div>
            <div>Image</div>
        </div>
        <div className='price-availaple'>
            <div className='price'><p>Ksh.252.00</p></div>
            <div className='available'><p>Available</p></div>
        </div>
    </div>
  )
}

export default Product