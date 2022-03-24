import React from 'react'
import { getUserProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function SellerProducts({sellerId,search}) {
          const [loading, setLoading] = useState(true);
          const [productz,setProducts]=useState([])

        useEffect(async ()=>{
         const products = await getUserProducts(sellerId);
          console.log("this are this seller's products at 0",products)   
          setProducts(products)

                 setLoading(false)


          return products
          
          
        },[])





        if(loading===true){
          console.log("this are this seller's products at 1",productz)   

          return(<div>Loading</div>)


        }

        else{
          console.log("this are this seller's products at 2",productz)   





  return (
    <div  className='product-card'>
        <div className='name-image'>
            <div className='product-name'>{productz[0].productName}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh: {productz[0].price}</p></div>
            <Link  className='' to="/seller">

            <button  className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )}

}


export default SellerProducts



