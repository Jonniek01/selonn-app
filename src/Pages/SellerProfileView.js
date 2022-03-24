import React from 'react'
import { Container } from 'react-bootstrap'
import '../sass/MyProfileSeller.scss'
import '../sass/SellerProfileView.scss'
import SellerProducts from '../components/SellerProduct'
import { getUser }  from '../data/Users'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {sId} from '../components/Product'




function SellerProfileView() {
  // let id=sId();
  let id="Kxv25dspeYQEmqcRo2tN"
  const [seller, setSeller]=useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(async ()=>{
    const sellerget = await getUser(id);

    setSeller(sellerget)

    setLoading(false)
  },[])


  if(loading===true){
    return(<h1>Loading seller profile....</h1>)
  }
  else{
    console.log("seller being enquired :",seller)

  
  return (
    <Container>
      <div className='seller-profile'>
          <Link className='back-search' to="/"><button >
 Back to Searches
 </button>
</Link>

    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>{seller.username}</h1></div>
          <div className='s-distance-name'><div className='s-distance'>30km</div><div className='s-name'>LocationName<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div></div>
          <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum convallis sem, quis egestas ante lacinia sed. Nunc luctus dui in arcu semper, vel mattis libero varius. Donec at ligula massa. Praesent convallis et justo et fringilla
</p>
            
        </div>


    </div>
    <div className='seller-product-cards'>
      <SellerProducts sellerId={id}/>
    </div>
    </div>

</Container>  )
  }

}

export default SellerProfileView