import React, { useState,useContext } from 'react';
import '../SignupForm/SignupForm.css';
import {useNavigate} from 'react-router-dom';
import signupContext from '../../Context/signupContext';

const SignupForm = () => {

    //navigation or redirection
    const navigation = useNavigate();
    //firstname
    const[inputFirstName,setFirstName] = useState('');
    //last name
    const[inputLastName,setLastName]=useState('');
    //email
    const[inputEmail,setEmail] = useState('');
    //password
    const[inputUserPassword,setUserPassword] = useState('');
    //Contact Number
    const[inputContactNumber,setContactNumber]=useState('');
    //error
    const[error,setError]=useState('');

    //useContext for getting user data
    const userObj = useContext(signupContext);
    
    //onsumbit
    const submitHandler= async (event)=>{
        event.preventDefault();
        console.log("reached here")
        try{
            const response = await fetch('http://127.0.0.1:5000/flights/users/signup',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    firstName : inputFirstName,
                    lastName : inputLastName,
                    email : inputEmail,
                    password : inputUserPassword,
                    contactNumber : inputContactNumber
                })
            })
            const responseData = await response.json();
            console.log(response);
            if(!response.ok){
                throw new Error(responseData.message);
            }
            else{
                userObj.user=responseData;
                navigation('/users/dashboard');
            }
        }
        catch(err){
            console.log(err);
            setError(err.message || 'Something went Wrong');
        }
    }

    
    //just need to fetch the id from the user and push to profile table
    

  return (
    <div className="login-form">
        <p className="text-center">Signup</p>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" placeholder='First Name' value={inputFirstName} onChange={(event)=>{setFirstName(event.target.value)}} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Second Name' value={inputLastName} onChange={(event)=>{setLastName(event.target.value)}}/>
            </div>
            <div className="form-group">
            <input type="text" placeholder="Email" value={inputEmail} onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className="form-group">
            <input type="password" placeholder="Password" value={inputUserPassword} onChange={(event)=>setUserPassword(event.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder='Contact Number' value={inputContactNumber} onChange={(event)=>{setContactNumber(event.target.value);console.log(event.target.value)}}/>
            </div>
            <div className="error-text">
                {error && <span>{error}</span>}
            </div>
            
            <button type="submit" className="btn btn-black btn-block">Signup</button>
        </form>
    </div>
  )
}

export default SignupForm;
