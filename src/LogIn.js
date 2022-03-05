import {React, useEffect, useState} from 'react'
import Emitter from './emitter';
import { Link, useSearchParams } from 'react-router-dom'
import { Container,Form ,Button} from 'react-bootstrap'
import { getAuth, signInWithPopup, GoogleAuthProvider,
createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut
 } from "firebase/auth";
import { app,db, auth } from './firebase/config';
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

 function LogIn() {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    onAuthStateChanged(auth, (currentuser)=>{
      if(currentuser){
        //notify user login success and store user in localstorage.
        Emitter.emit("loginSuccess1", currentuser);
        localStorage.setItem('_user',JSON.stringify(currentuser));
      }
    });
    const normalLogin = async ()=>{
      try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
        if(user){
          Emitter.emit("loginSuccess", user);
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
      <Form className='login-form'>
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
  <Button variant="primary" type="submit">
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