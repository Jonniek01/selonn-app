import {React, useEffect, useState} from 'react'
import Emitter from './emitter';
import { Link, useSearchParams } from 'react-router-dom'
import { Container,Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider,
createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut
 } from "firebase/auth";
import { app,db, auth } from './firebase/config';
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
/*eslint-disable */
 function LogIn() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    useEffect(()=>{
      Emitter.on('logout',()=>{
        logout;
        console.log("Has got the logout message. Logging you out in the login page")
      })
    })

    onAuthStateChanged(auth, (currentuser)=>{
      if(currentuser){
        //notify user login success and store user in localstorage.
        Emitter.emit("loginSuccess", currentuser);
        const {uid, email, displayName, phoneNumber,photoURL } = currentuser;
        localStorage.setItem('_user',JSON.stringify({uid, id:uid, email,displayName,phoneNumber,photoURL}));
      }
    });
    const normalLogin = async ()=>{
      try{
      const {data} = await axios.post(`${SERVER_URL}/auth/signin`,{
        email:loginEmail,
        password: loginPassword
      })
        if(data.status == true){
          let user = data.data[0];
          localStorage.setItem('_user',JSON.stringify(user));
          console.log(" now user",user)
          Emitter.emit("loginSuccess", data);
        }else{
          console.log("error validating credentials",data)
        }
      }catch(err){
        setError(error);
        console.log(err.message)
      }
    }

    const logout = async ()=>{
      await signOut(auth)
      Emitter.emit("logoutSucess");
      console.log("signout success")
    }

   const googleLogin = async ()=>{
    try{
    
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

// This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
      const user = result.user;
      Emitter.emit("loginSuccess", user);
      setUser(user);

    }catch(error){
    setError(error)
    // Handle Errors here.
    const errorCode = error.code;
    
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  };

  }
  return (
    <Container className='logIn'>

      <h3>LOG IN</h3>
      <span className="text-danger">{error?.message}</span>
      <Form className='login-form' onSubmit={(e)=>e.preventDefault()}>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
      setLoginEmail(e.target.value)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
      setLoginPassword(e.target.value)
    }} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={normalLogin}>
    Submit
  </Button>
  <Button variant="danger d-none" type="submit" onClick={(e)=>{
    e.preventDefault()
    logout();
  }}>
    Logout
  </Button>

</Form>

<div>
    <button className='btn-primary' onClick={googleLogin}>Log In With Google</button>
</div>

<Link  className='' to="/createAccount">
    Create Account
    
</Link>
      { user?.email}
    </Container>

    
  )
}

export default LogIn