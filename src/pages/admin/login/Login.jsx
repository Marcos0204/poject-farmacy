import React, { useState, useContext } from 'react'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import './login.css'
import { AppContext } from '../../../context/AppContext';

import  { appFirebase } from '../../../firebase'

const auth = getAuth(appFirebase);

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { isAuth, Login } = useContext(AppContext)
  console.log(isAuth)



  const halendSubmit = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Login(user)
        console.log(isAuth)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  return (
    <div className='container-flex'>

      <form className="container" onSubmit={halendSubmit}>
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value) } />
        <input type='text' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value) }  />
        <input type='submit' className='button' />
      </form>
    </div>
  )
}

export default Login
