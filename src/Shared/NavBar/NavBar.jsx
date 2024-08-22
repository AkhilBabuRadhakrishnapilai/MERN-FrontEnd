import React from 'react';
import '../NavBar/NavBar.css';
import NavComponents from '../LandingPage/Components/NavComponents';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="../../Assets/Design.png" alt="Flights.com" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <NavComponents/>
    </div>
  </div>
</nav>
  )
}

export default NavBar;
