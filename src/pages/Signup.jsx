import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Signup = () => {

  return (
    <div>
      <Navbar />

      <div id='page-2'>
        <SignupForm />
      </div>

    </div>
  )
}

export default Signup