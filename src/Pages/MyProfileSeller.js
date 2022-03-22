import React from 'react'
import '../sass/MyProfileSeller.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { getProducts, getUserProducts } from '../data/Products'
import { useState, useEffect } from 'react'
import UpdateSellerForm from '../components/UpdateForm'
import UpdateProductForm from '../components/UpdateProductForm'
import CreateProductForm from '../components/CreateProductForm'
import SellerProduct from '../components/SellerProduct';
import { Container, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

 function MyProfileSeller({clat,clong}) {
  const User = JSON.parse(localStorage.getItem('_user'));

  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const handleClosep = () => setShowp(false);
  const handleShowp = () => setShowp(true);
  const [showpedit, setShowpedit] = useState(false);
  const handleClosepedit = () => setShowpedit(false);
  const handleShowpedit = () => setShowpedit(true);

  const [loading, setLoading] = useState(true);
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    async function getData(){
        let userProducts =  await getUserProducts(User.id);
        setProducts(userProducts);
        setLoading(false);
    }
    getData();

  },[])

  return (
    <Container>
      <div className='seller-profile'>
    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>Brand</h1></div>
          <div className='s-distance-name'><div className='s-distance'>30km</div><div className='s-name'>LocationName<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div></div>
          <span>User Id:{User.id}</span><span>lat:{clat}</span><span>long:{clong}</span>

          <p className='description'>
              {User.description}
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
      {/* {SellerProduct(loading,products)} */}
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

          <UpdateSellerForm clat={clat} clong={clong} user={User}/>

        </Modal.Body>
      </Modal>

      {/*modal for creating poduct*/}

      <Modal show={showp} onHide={handleClosep} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProductForm/>

        </Modal.Body>
      </Modal>

            {/*modal for editing poduct*/}

            <Modal show={showpedit} onHide={handleClosepedit} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProductForm/>

        </Modal.Body>
      </Modal>
      


</Container> 
    )
}

export default MyProfileSeller
