import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddFlights from '../Components/AddFlights/AddFlights';
import Nav from '../../../Shared/NavAfterLogin/Pages/Nav';
import SideBar from '../../Dashboard/Components/SideBar';
import FlightList from '../Components/ListOfFlights/FlightList';
import '../../Flights/Pages/Flight.css';

const Flight = () => {

  const[show,setShow]=useState(false);

  const handleShow = () =>{
    setShow(true);
  }

  const handleClose = () =>{
    setShow(false);
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <Nav/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <SideBar/>  
        </div>
        <div className="col-md-10">
          <div className='d-flex justify-content-between align-items-center mb-3'>
          <Button variant="primary" onClick={handleShow}>
            Add Flights
          </Button>
          <AddFlights show={show} handleClose={handleClose}/>
          </div>
          <FlightList/>
        </div>
      </div>
    </div>
  )
}

export default Flight;