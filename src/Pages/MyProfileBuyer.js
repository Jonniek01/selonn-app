import React from 'react'
import { Container } from 'react-bootstrap'
import '../sass/MyProfileBuyer.scss'

function MyProfileBuyer({userId,clat,clong}) {
  return (
    <Container>``
      <div className='buyer-profile'>
    <div className='buyer-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='buyer-contents'>
          <h1>User Name</h1>
          <button>Edit Profile</button>

          

        </div>
        <span>userId:{userId}</span><span>lat:{clat}</span><span>long:{clong}</span>



    </div>
    </div>

</Container>  )
}

export default MyProfileBuyer