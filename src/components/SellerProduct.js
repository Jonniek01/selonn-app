import React from 'react'
import  { getProducts }  from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // }

function SellerProduct(loading,products) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let user = JSON.parse(localStorage.getItem('_user'));

useEffect(async ()=>{
  const products = await getProducts();
  setProducts(products)
  setLoading(false)
},[])

function setId(){
 const id=user.id;
 return id
}

const Productz= products.map(product=>(

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



        if(!loading){
          return(
            <Productz/>
          )

        }
        else return(
          <div><h4>Loading....</h4></div>
        )

}

export default SellerProduct


