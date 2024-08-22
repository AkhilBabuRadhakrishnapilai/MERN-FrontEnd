import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddFlights from '../Components/AddFlights/AddFlights';

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
        <div className="col-auto">
          <Button variant="primary" onClick={handleShow}>
            Add Flights
          </Button>
          <AddFlights show={show} handleClose={handleClose}/>
        </div>
      </div>
    </div>
  )
}

export default Flight;