import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'


export default class UpdateBuyerForm extends Component {
  render() {
    return (
      <div>        <Form className='buyer-update-form'>


          
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


      </Form>
</div>
    )
  }
}
