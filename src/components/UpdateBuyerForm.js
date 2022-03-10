import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'
import axios from 'axios';

/*eslint-disable */

export default class UpdateBuyerForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.user = JSON.parse(localStorage.getItem('_item'));
  }
  
// Form submitting logic, prevent default page refresh 
handleSubmit(event){
  event.preventDefault();
  let fd = new FormData(event.target);
  let data = Object.fromEntries(fd.entries());
  
  console.log("Attempting to update buyer information")
  //update buyer
  
  axios.put(`${SERVER_URL}/users/${this.user.id}`,data).then(res=>res.json()).then(res=>{
    console.log("Finished updating user information")
    alert(res)
  }).catch(err=>console.log(err))

  console.log("Finished upating buyer information")
}

  render() {
    return (
      <div> 
        <Form className='buyer-update-form' onSubmit={this.handleSubmit}>


          
      <div className='brand-image'>
      <Form.Group className="mb-3 " >
      <Form.Label>User Name </Form.Label>
      <Form.Control type="text"  name='email'
          
            
            placeholder="Enter User Name" />
      </Form.Group>

      </div>

    <div className='passwords'>

      <Form.Group className="mb-3 " >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 " >

      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" name="cPassword" placeholder="Password" />
      </Form.Group>
      </div>
      <Button variant="primary" type="submit">
          Update
          </Button>




      </Form>
</div>
    )
  }
}
