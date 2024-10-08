import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Components/NavComponents.css';

const NavComponents = () => {
  return (
    <ul className="navbar-nav">
        <li className='nav-item'>
            <NavLink to="/" exact className="btn btn-light nav-button">Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact className="btn btn-light nav-button">Your Cart</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact className="btn btn-light nav-button">Your Orders</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/users/login" exact className="btn btn-light nav-button">Login</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/users/signup" exact className="btn btn-light nav-button">Signup</NavLink>
        </li>
    </ul>
  )
}

export default NavComponents;
