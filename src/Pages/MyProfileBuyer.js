import React from 'react'
import { Container,Modal,Button ,Form} from 'react-bootstrap'
import { useState } from 'react'


import '../sass/MyProfileBuyer.scss'

function MyProfileBuyer({userId,clat,clong}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container>
      <div className='buyer-profile'>
    <div className='buyer-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='buyer-contents'>
          <h1>User Name</h1>
          <Button variant="primary" onClick={handleShow}>
        Edit account
      </Button>          

        </div>
        <span>userId:{userId}</span><span>lat:{clat}</span><span>long:{clong}</span>




    </div>
    </div>

        {/*modal fo editing account*/}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='buyer-update-form'>


          
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

        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          }}>
          Update
          </Button>

        </Modal.Footer>
      </Modal>



</Container>  )
}

export default MyProfileBuyer