import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'


export default class UpdateSellerForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
// Form submitting logic, prevent default page refresh 
handleSubmit(event){
  event.preventDefault();
  let fd = new FormData(event.target);
  let data = Object.fromEntries(fd.entries());

  
  alert(JSON.stringify(data))
}
  render() {
    
    return (
      <>        
        
        <Form className='form' onSubmit={this.handleSubmit}>
      <div className='create-names'>


    <Form.Group className="mb-3 " >
    <Form.Label>First Name</Form.Label>
    <Form.Control name="firstName" type="text" placeholder="First Name" />
    </Form.Group>
      <Form.Group className="mb-3 " controlId="">
    <Form.Label>Second Name</Form.Label>
    <Form.Control name="secondName" type="text" placeholder="Second Name" />

    </Form.Group>
    </div>


    
  <div className='email-phone-text'>
    <div className='email-phone'>

    
    <Form.Group className="mb-3 " >
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3 " >  
    <Form.Label>Phone Number</Form.Label>
    <Form.Control name="tell" type="tell" placeholder="+254" />
    </Form.Group>
    </div>

    <Form.Text className="text-muted">
    As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
    </Form.Text>

    </div>

    <div className='brand-image'>
    <Form.Group className="mb-3 " >
    <Form.Label>User Name </Form.Label>
    <Form.Control name="userName" type="text" placeholder="Enter User Name" />
    </Form.Group>
    <Form.Group className="mb-3 " >
    <Form.Label>Cover Photo </Form.Label>
    <Form.Control type="file" placeholder="Upload C" />
    </Form.Group>



    </div>

    <div className='more-seller' >
      <div className='location-set-div'>
      <Button className='set-location'>Set location</Button>
      <p className='location-set'>Not set</p>


      </div>

    <div className='description'>
    <Form.Group className="mb-3 " >
    <Form.Label>Bussiness description </Form.Label>
    <Form.Control name="description" as="textarea" rows={3} placeholder="Your Bussiness Description" />
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
</>
    )
  }
}
