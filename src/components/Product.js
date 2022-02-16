import React from 'react'
import { products } from '../data/Products'

function Product() {
  return (
    <div>
        <div>
            <span>ProductName</span>
            <span>Image</span>
        </div>
        <div>
            <span>Price</span>
            <span>Available</span>
        </div>
    </div>
  )
}

export default Product