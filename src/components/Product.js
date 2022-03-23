import React from 'react'
import { getUserProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // }

function Product(sellerId,search) {
          const [products, setProducts] = useState([]);
          const [loading, setLoading] = useState(true);
        useEffect(async ()=>{
          const products = await getUserProducts(sellerId);
          console.log("this are this seller's products"+JSON.parse(products))

          return products
          
          
        },[])

  return (
    <div key={!products[0]?'':products[0].id} className='product-card'>
        <div className='name-image'>
            <div className='product-name'>{!products[0]?'loading...':"productname"}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>{!products[0]?'loading':"price"}</p></div>
            <Link  className='' to="/seller">

            <button  className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )}

export default Product


