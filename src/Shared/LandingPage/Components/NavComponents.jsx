import React from 'react';
import {NavLink} from 'react-router-dom';

const NavComponents = () => {
  return (
    <ul className="navbar-nav">
        <li className='nav-item'>
            <NavLink to="" exact>Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact>Your Cart</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact>Your Orders</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact>Login</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="" exact>Signup</NavLink>
        </li>
    </ul>
  )
}

export default NavComponents;
