import axios from 'axios';
import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'

/*eslint-disable */
export default class CreateProductForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
// Form submitting logic, prevent default page refresh 
handleSubmit(event){
  event.preventDefault();
  let fd = new FormData(event.target);
  let data = Object.fromEntries(fd.entries());

  axios.post(`${SERVER_URL}/products`,data).then(res=>{
    console.log("Finished creating product")
    alert(res);
  }).catch(err=>console.log(err))
}
  render() {
    return (
      <div>        <Form className='form-product' onSubmit={this.handleSubmit}>
      <div className='name-price'>


    <Form.Group className="mb-3 " >
    <Form.Label>Product Name</Form.Label>
    <Form.Control name="productName" type="text" placeholder="Product Name" />
    </Form.Group>
    <Form.Group className="mb-3 " >
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" type="number" placeholder="Price" />
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
    <Form.Control name="description" as="textarea" rows={2} placeholder="Product Description" />
    </Form.Group>



    </div>

    <Button variant="primary" type="submit" >
    Create
    </Button>


    </Form>
</div>
    )
  }
}
