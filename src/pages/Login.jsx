import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm';

const Login = () => {

  return (
    <div>
      <Navbar />

      <div id='page-2'>
        <LoginForm />
      </div>

    </div>
  )
}

export default Login