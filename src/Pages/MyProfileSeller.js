import React from 'react'
import { Container,Modal,Button ,Form} from 'react-bootstrap'
import '../sass/MyProfileSeller.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { User } from '../data/User'
import { Products } from '../data/Products'
import { useState } from 'react'


function MyProfileSeller({userId,clat,clong}) {
  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const handleClosep = () => setShowp(false);
  const handleShowp = () => setShowp(true);
  const [showpedit, setShowpedit] = useState(false);
  const handleClosepedit = () => setShowpedit(false);
  const handleShowpedit = () => setShowpedit(true);



  const [products,setProducts]=useState(Products)
  const product=products.filter(product=>product.userId===userId).map((product)=>{
    return<div key={product.productId}>
          <div className='product-card-seller'>
        <div className='name-image'>
            <div className='product-name'>{product.productName}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>{product.price} Ksh</p></div>
            <span>
            <button className='b-available' style={{color:product.available===true?"blue":"red"}}>{product.available===true?"Available":"Unavailable"}</button>
            <Button variant="primary" onClick={handleShowpedit}>
      Edit Product
      </Button>



            </span>
            
        </div>
    </div>

      
      
      </div>
  }

  )


  return (
    <Container>
      <div className='seller-profile'>
    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>Brand</h1></div>
          <div className='s-distance-name'><div className='s-distance'>30km</div><div className='s-name'>LocationName<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div></div>
          <span>userId:{userId}</span><span>lat:{clat}</span><span>long:{clong}</span>

          <p className='description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum convallis sem, quis egestas ante lacinia sed. Nunc luctus dui in arcu semper, vel mattis libero varius. Donec at ligula massa. Praesent convallis et justo et fringilla
  </p>
            
        </div>


    </div>
    <div className='edit-create'>
      <span className='edit'>  
      <Button variant="primary" onClick={() => setShow(true)}>
        Edit account
      </Button></span><span className='create'> 
       <Button variant="primary" onClick={handleShowp}>
      Create Product
      </Button>

</span>
    </div>
    <div className='seller-product-cards'>
      {product}
    </div>
    </div>


    {/*modal fo editing account*/}
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form className='form'>
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
          <Form.Group className="mb-3 " >        <Modal.Footer>
        </Modal.Footer>

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

          <div className='more-seller' >
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
          Update
          </Button>
          </Form>


        </Modal.Body>
      </Modal>

      {/*modal for creating poduct*/}

      <Modal show={showp} onHide={handleClosep} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='form-product'>
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
          Create
          </Button>


          </Form>

        </Modal.Body>
      </Modal>

            {/*modal for editing poduct*/}

            <Modal show={showpedit} onHide={handleClosepedit} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='form-product'>
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

        </Modal.Body>
      </Modal>
      

      



</Container>  )
}

export default MyProfileSeller