/*eslint-disable */
import axios from 'axios';
async function Users(){
   const {data} = await axios.get(`http://localhost:5000/users`);
   return data;
}

export default Users
