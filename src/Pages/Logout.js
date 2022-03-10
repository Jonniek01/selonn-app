import React, { useEffect } from 'react'
import Emitter from '../emitter'


function Logout() {
    useEffect(()=>{

        Emitter.emit('logout');
        console.log("Attempting to log you out in a minute.....")
    })
  return (
    <div>Loggin you out in a minute...</div>
  )
}

export default Logout