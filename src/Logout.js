import React, { useEffect } from 'react'
import Emitter from './emitter'
import { auth } from './firebase/config'
import  {signOut } from 'firebase/auth'

function Logout() {
    useEffect(()=>{
        signOut(auth);
        Emitter.emit("logoutSuccess");
        console.log("Finished logging out.")
    })
  return (
    <div>Loggin you out in a minute...</div>
  )
}

export default Logout