import React, { Component, useEffect } from 'react'
import { Button ,Form} from 'react-bootstrap'
import { useState } from 'react';
import axios from '../axios';

/*eslint-disable */
function UpdateForm({clat,clong}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('_user')));
 let handleSubmit=(event)=>{
    event.preventDefault();
    let fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
    
    //update user details
    axios.put(`/users/${user.uid}`,data).then(res=>{
      alert("Finished updating seller information");
    }).catch(err=>console.log(err))
    
  }
  return (
    <div>
    <Form className='form' onSubmit={handleSubmit}>
  <div className='create-names'>


<Form.Group className="mb-3 " >
<Form.Label>First Name</Form.Label>
<Form.Control name="firstName" type="text" value={user.firstName || ''} placeholder="First Name" />
</Form.Group>
  <Form.Group className="mb-3 " controlId="">
<Form.Label>Second Name</Form.Label>
<Form.Control name="secondName" type="text" value={user.lastName || ''} placeholder="Second Name"/>

</Form.Group>
</div>



<div className='email-phone-text'>
<div className='email-phone'>


<Form.Group className="mb-3 " >
<Form.Label>Email address</Form.Label>
<Form.Control name="email" type="email" value={user.email || ''} placeholder="Enter email" />
</Form.Group>
<Form.Group className="mb-3 " >  
<Form.Label>Phone Number</Form.Label>
<Form.Control name="tell" type="tell" value={user.phone || ''} placeholder="+254" />
</Form.Group>
</div>

<Form.Text className="text-muted">
As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
</Form.Text>

</div>

<div className='brand-image'>
<Form.Group className="mb-3 " >
<Form.Label>User Name </Form.Label>
<Form.Control name="userName" type="text" value={user.username || ''} placeholder="Enter User Name" />
</Form.Group>
</div>

<div className='more-seller' >
  <div className='location-up-div'>
    <p>Make sure you are in your bussiness location when submitting this form in order to set up your correct bussiness location</p>
    <Form.Group className="mb-3 " >
          <Form.Control type="text" name="location" placeholder="Location Name" />
    <Form.Control name="fixedLatitude" type="hidden" value={Number(clat)} />
    <Form.Control name="fixedLongitude" type="hidden" value={Number(clong)} />

    </Form.Group>

  </div>

<div className='description'>
<Form.Group className="mb-3 " >
<Form.Label>Bussiness description </Form.Label>
<Form.Control name="description" as="textarea" rows={3} value={user.description || ''} placeholder="Your Bussiness Description" />
</Form.Group>



</div>
<div className='seller-check'>
{['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">

      <Form.Check name="isSeller"
       label={'I am a seller'}

        type={type}
        id={`default-${type}`}
      />

            </div>
          ))}
</div>

</div>






<div className='passwords'>

<Form.Group className="mb-3 " >
<Form.Label>Password</Form.Label>
<Form.Control name="password" type="password" placeholder="Password" />
</Form.Group>

<Form.Group className="mb-3 " >

<Form.Label>Confirm Password</Form.Label>
<Form.Control name="cPassword" type="password" placeholder="Password" />
</Form.Group>
</div>


<Button variant="primary" type="submit" >
Update
</Button>
</Form>


    </div>

  )
}

export default UpdateForm