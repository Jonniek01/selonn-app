import React from 'react'
import  { getProducts }  from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // }

function SellerProduct({products}) {

        

  return (
    <>
    { products.map(product=>(

      <div key={product.id}>
          <div className='product-card-seller'>
        <div className='name-image'>
            <div className='product-name'>{product.name}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh. {product.price}</p></div>
            <span>
            <button className='b-available' style={{color:product.available===true?"blue":"red"}}>{product.available===true?"Available":"Unavailable"}</button>
            <Button variant="primary" >
        Edit Product
      </Button>



            </span>
            
        </div>
    </div>
      </div>


    ))
    }
      </>
  )}

export default SellerProduct


