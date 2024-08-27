import React from 'react';
import '../Signup/Signup.css';
import SignupForm from '../SignupForm/SignupForm';
import { UserProvider } from '../../Context/signupContext';
 
const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 signup-column">
          <UserProvider>
            <SignupForm/>
          </UserProvider>
        </div>
      </div>
    </div>
  )
}

export default Signup;
