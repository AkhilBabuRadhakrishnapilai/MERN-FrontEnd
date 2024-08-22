import React from 'react';
import '../Signup/Signup.css';
import SignupForm from '../SignupForm/SignupForm';

const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="roe">
        <div className="col-sm-6">
          <SignupForm/>
        </div>
      </div>
    </div>
  )
}

export default Signup;
