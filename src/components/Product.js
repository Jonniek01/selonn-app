import React from 'react'
import { Products } from '../data/Products'
import '../sass/Product.scss'
import { useState } from 'react'

function Product() {
  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // })

  return (
    <div className='product-card'>
        <div className='name-image'>
            <div className='product-name'>ProductName</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh.252.00</p></div>
            <div className='available'><p>Available</p></div>
        </div>
    </div>
  )
}

export default Product