import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Components/NavComp.css';

const NavComp = () => {
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
            <NavLink to="/" exact className="btn btn-light nav-button">Logout</NavLink>
        </li>
    </ul>
  )
}

export default NavComp
