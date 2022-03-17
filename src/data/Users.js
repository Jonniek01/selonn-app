/*eslint-disable */
import axios from 'axios';
export async function getUsers(){
   const {data} = await axios.get(`http://localhost:5000/users`);
   return data;
}

export async function getUser(userId){
   const {data} = await axios.get(`${SERVER_URL}/users/${userId}`);
   return data;
}
