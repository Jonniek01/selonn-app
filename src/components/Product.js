import React from 'react'
import { getProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // }

function Product(userId,search) {
          const [products, setProducts] = useState([]);
          const [loading, setLoading] = useState(true);
        useEffect(async ()=>{
          const products = await getProducts();
          setProducts(products)
          // setLoading(false)
        },[])

        function setId(){
         const id=userId;
         return id
        }

  return (
    <div key={loading?'':products[0].id} className='product-card'>
        <div className='name-image'>
            <div className='product-name'>{loading?'loading...':products[0].name}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>{loading?'loading':products[0].price}</p></div>
            <Link  className='' to="/seller">

            <button  className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )}

export default Product


