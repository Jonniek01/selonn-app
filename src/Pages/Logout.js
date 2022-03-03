import React, { useEffect } from 'react'
import Emitter from '../emitter'


function Logout() {
    useEffect(()=>{
        Emitter.on('sayHi', ()=>{
          console.log("I was greeted in the logout page")
        })
        console.log("This is what I am listening in the logout page")
    })
  return (
    <div>Loggin you out in a minute...</div>
  )
}

export default Logout