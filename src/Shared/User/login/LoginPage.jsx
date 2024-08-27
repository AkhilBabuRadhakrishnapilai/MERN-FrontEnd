import React from 'react';
import LoginForm from '../Components/LoginForm/LoginForm';
import '../login/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center align-items-center login-row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
