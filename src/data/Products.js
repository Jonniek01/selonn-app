/*eslint-disable */
import axios from 'axios';
async function Products(){
   const {data} = await axios.get(`http://localhost:5000/products`);
   return data;
}

export default Products
