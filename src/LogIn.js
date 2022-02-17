import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Form ,Button} from 'react-bootstrap'


function LogIn() {
  return (
    <Container className='logIn'>
      <Form className='login-form'>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<div>
  <h3>Or</h3>
  <button>Log In With Google</button>
</div>
        



<Link  className='createAccount' to="/createAccount">
    Create Account
    
</Link>


    
    
    </Container>

    
  )
}

export default LogIn