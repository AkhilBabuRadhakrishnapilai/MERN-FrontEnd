import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddTrip from '../Add/AddTrip';
import Nav from '../../../Shared/NavAfterLogin/Pages/Nav';
import SideBar from '../../Dashboard/Components/SideBar';
import TripDetailsList from '../../TripDetails/List/TripDetailsList';

const TripPage = () => {
  const[show,setShow]=useState(false);

  const handleShow=()=>{
    setShow(true);
  }
  const handleClose=()=>{
    setShow(false);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav/>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <SideBar/>
        </div>
        <div className="col-auto">
          <Button variant='primary' onClick={handleShow}>
            Add Trip
          </Button>
          <AddTrip show={show} handleClose={handleClose}/>
          <TripDetailsList/>
        </div>
      </div>
    </div>
  )
}

export default TripPage
