import React from 'react'
import { Container } from 'react-bootstrap'
import '../sass/MyProfileSeller.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { User } from '../data/User'
import { Products } from '../data/Products'
import { useState } from 'react'


function MyProfileSeller() {
  const [products,setProducts]=useState(Products)
  const [user,setUser]=useState(User)
  const userId=user.userId;
  const product=products.filter(product=>product.userId===userId).map((product)=>{
    return<div key={product.productId}>{product.productName}</div>
  }

  )
  return (
    <Container>
      <div className='seller-profile'>
    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>Brand</h1></div>
          <div className='s-distance-name'><div className='s-distance'>30km</div><div className='s-name'>LocationName<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div></div>
          <p className='description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum convallis sem, quis egestas ante lacinia sed. Nunc luctus dui in arcu semper, vel mattis libero varius. Donec at ligula massa. Praesent convallis et justo et fringilla
</p>
            
        </div>


    </div>
    <div className='edit-create'>
      <span className='edit'><button>Edit Account</button></span><span className='create'><button>Create Product</button></span>
    </div>
    <div className='seller-product-cards'>
      {product}
    </div>
    </div>

</Container>  )
}

export default MyProfileSeller