import React from 'react'
import { Container } from 'react-bootstrap'
import { User } from '../data/User'
import { Sellers } from '../data/Sellers'
import { Products } from '../data/Products'
import Product from '../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../sass/shopFeed.scss'


function ShopFeed() {
  return (
    <>
    <Container>
      <div className='search-container'>
      <div className='search'>
      <FontAwesomeIcon className='search-icon'  icon={faSearch}  />
      <input className='search-input' type="text"></input>

        
      </div>


      </div>

      <div className='feed-card'>

        <div>
          <div>
          <span>Brand</span><span>Distance:</span><span>location Name</span>
          </div>
        <Product/>
        </div>
      </div>
      <div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>

    </Container>
    
    
    </>
  )
}

export default ShopFeed