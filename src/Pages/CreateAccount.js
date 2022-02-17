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
          <Form className='login-form'>
            <div className='create-names'>


          <Form.Group className="mb-3 " controlId="">
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

          
          <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tell" placeholder="+254" />
          </Form.Group>
          </div>

          <Form.Text className="text-muted">
          As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
          </Form.Text>

          </div>


          <Form.Group className="mb-3 " controlId="">
          <Form.Label>User Name </Form.Label>
          <Form.Control type="email" placeholder="Enter User Name" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="">
            <h6><span>Double click</span><span><Button onClick={changeSeller}>Here</Button></span><span>if you are registering as a seller</span></h6>
          </Form.Group>
          <div className='more-seller' style={{display:seller===true?"block":"none"}}>
            seller additional info

          </div>


        <div className='passwords'>

          <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicPassword">

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
            



          <Link  className='createAccount' to="/">
          Log in

          </Link>




          </Container>


    </div>

  )
}

export default CreateAccount