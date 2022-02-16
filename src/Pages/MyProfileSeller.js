import React from 'react'
import { Container } from 'react-bootstrap'


function MyProfileSeller() {
  return (
    <Container>
      <div className='seller-profile'>
    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>Brand</h1></div>
          <div className='s-distance-name'><span className='s-distance'>Distance</span><span className='s-name'>LocationName</span></div>
          <p className='description'>Description</p>
            
        </div>


    </div>
    <div className='edit-create'>
      <span><button>Edit Account</button></span><span><button>Create Product</button></span>
    </div>
    </div>

</Container>  )
}

export default MyProfileSeller