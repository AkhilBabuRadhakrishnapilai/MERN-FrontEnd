import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    //navigation or for redirection
    const navigation = useNavigate();

    const[inputEmail,setEmail]=useState('');
    const[inputUserPassword,setPassword]=useState('');
    const[error,setError]=useState();

    const usernameHandler = (event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    const submitHandler = async (event)=>{
        event.preventDefault();
        
        try{
                const response = await fetch('http://127.0.0.1:5000/flights/users/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    email:inputEmail,
                    password:inputUserPassword
                })
            })
            const responseData= await response.json();
            console.log(responseData);

        if(!response.ok){
            throw new Error(responseData.message);
        }
        //login 
        else{
            navigation('/users/dashboard');
        }
        }
        catch(err){
            console.log(err);
            setError(err.message || 'Something went wrong');
        }
        
    }
  return (
    <div className="login-form">
        <p className="text-center">Login</p>
        <form onSubmit={submitHandler}>
            <div className="form-group">
            <input type="text" placeholder="Email" value={inputEmail} onChange={usernameHandler}/>
            </div>
            <div className="form-group">
            <input type="password" placeholder="Password" value={inputUserPassword} onChange={passwordHandler}/>
            </div>
            <div className="error-text">
                {error && <span className='error'>{error}</span>}
            </div>
            <div className="form-check mb-3">
                <label>
                    <input type="checkbox" />Remember me
                </label>
                <a href="#" className="float-right">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-black btn-block">Log in</button>
        </form>
        <p className="mt-3">Don't have an account? <a href="#" >Sign up for free</a></p>
    </div>
  )
}

export default LoginForm
