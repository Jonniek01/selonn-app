import React from 'react'
import { Container } from 'react-bootstrap'
import Users  from '../data/User'
import { Sellers } from '../data/Sellers'
import {Producthome,productprofile} from '../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'


import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../sass/shopFeed.scss'
import { useState } from 'react'


function ShopFeed() {
  const [sellers,setSellers]=useState(Users);
  const User = JSON.parse(localStorage.getItem('_user'));

  
const FeedCard=sellers.sort((a, b) => parseFloat(a.latitudeFixed) - parseFloat(b.latitudeFixed)).map((seller)=>{
 let distance=seller.latitudeFixed

 return (<div key={seller.userId} className="feed-card">
   <div className='feedcard-header'>
   <span className='brand'>Brand</span>
   <span className='distance'>Distance</span>
   <span className='location-name'>Location Name<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></span>


   </div>


   <Producthome userId={seller.userId}/>

   
   
   </div>)
});
  return (
    <>
    <Container>
      <div className='search-container'>
      <div className='search'>
      <FontAwesomeIcon className='search-icon'  icon={faSearch}  />
      <input className='search-input' placeholder='Search...' type="text"></input>

        
      </div>
      

      </div>
      <div className='searchcover'></div>

      <div className='feed-div'>

      <div className='feed-container'>
        
      {FeedCard}



      </div>
      </div>


      

    </Container>
    
    
    </>
  )
}

export default ShopFeed