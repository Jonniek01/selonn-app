import React from 'react'
import { getUserProducts}   from '../data/Products'
import '../sass/Product.scss'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
let id=""

export const Product=({sellerId,search})=> {
          const [loading, setLoading] = useState(true);
          const [productz,setProducts]=useState([])

          // console.log("seller id :",sellerId)
        useEffect(async ()=>{
         const products = await getUserProducts(sellerId);
          setProducts(products)

                 setLoading(false)


          return products
          
          
        },[])





        if(loading===true){

          return(<div>Loading</div>)


        }

        else{





  return (
    <div  className='product-card'>
        <div className='name-image'>
            <div className='product-name'>{productz[0].productName}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh. {productz[0].price}</p></div>
            <Link  className='' to="/seller">

            <button onClick={()=>{id=productz[0].userId}}  className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )}

}

export const sId=()=> {
  return id
}



