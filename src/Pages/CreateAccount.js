import React from 'react'
import {Link} from 'react-router-dom'
import '../sass/LogIn.scss'
import { Container,Form ,Button} from 'react-bootstrap'
import { useState } from 'react'
import '../sass/CreateAccount.scss'



function CreateAccount() {
  let[seller,setSeller]=useState(false)

  function changeSeller(){
    setSeller(seller);
    seller=!seller
  }


  return (
    <div>

          <Container className='createAccount'>

          <h3>Create Account</h3>
          <Form className='account-form'>
            <div className='create-names'>


          <Form.Group className="mb-3 " >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
            <Form.Group className="mb-3 " controlId="">
          <Form.Label>Second Name</Form.Label>
          <Form.Control type="text" placeholder="Second Name" />

          </Form.Group>
          </div>


          
        <div className='email-phone-text'>
          <div className='email-phone'>

          
          <Form.Group className="mb-3 " >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 " >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tell" placeholder="+254" />
          </Form.Group>
          </div>

          <Form.Text className="text-muted">
          As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
          </Form.Text>

          </div>

          <div className='brand-image'>
          <Form.Group className="mb-3 " >
          <Form.Label>User Name </Form.Label>
          <Form.Control type="email" placeholder="Enter User Name" />
          </Form.Group>
          <Form.Group className="mb-3 " >
          <Form.Label>Cover Photo </Form.Label>
          <Form.Control type="file" placeholder="Upload C" />
          </Form.Group>



          </div>

          <Form.Group className="mb-3 " >
            <h6><span>Double click</span><span><Button onClick={changeSeller}>Here</Button></span><span>if you are registering as a seller</span></h6>
          </Form.Group>
          <div className='more-seller' style={{display:seller===true?"block":"none"}}>
            <div className='location-set-div'>
            <Button className='set-location'>Set location</Button>
            <p className='location-set'>Not set</p>


            </div>

          <div className='description'>
          <Form.Group className="mb-3 " >
          <Form.Label>Bussiness description </Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your Bussiness Description" />
          </Form.Group>



          </div>
         <div className='seller-check'>
          {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">

                <Form.Check 
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
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3 " >

          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </div>


          <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          }}>
          Submit
          </Button>
          </Form>

          <div>
          <button>Log In With Google</button>
          </div>
            



          <Link  className='log' to="/">
          Log in

          </Link>




          </Container>


    </div>

  )
}

export default CreateAccount