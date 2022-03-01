import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'


export default class UpdateProductForm extends Component {
  render() {
    return (
      <div>        <Form className='form-product'>
      <div className='name-price'>


    <Form.Group className="mb-3 " >
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Product Name" />
    </Form.Group>
    <Form.Group className="mb-3 " >
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Price" />
    </Form.Group>

    </div>
    <div className='product-image'>
    <Form.Group className="mb-3 " >
    <Form.Label>Product image </Form.Label>
    <Form.Control type="file" placeholder="Upload Image" />
    </Form.Group>



    </div>
    <div className='product-description'>
    <Form.Group className="mb-3 " >
    <Form.Label>Product description </Form.Label>
    <Form.Control as="textarea" rows={2} placeholder="Product Description" />
    </Form.Group>



    </div>
    <Button variant="primary" type="submit" onClick={(e)=>{
    e.preventDefault()
    }}>
    Update
    </Button>


    </Form>
</div>
    )
  }
}
