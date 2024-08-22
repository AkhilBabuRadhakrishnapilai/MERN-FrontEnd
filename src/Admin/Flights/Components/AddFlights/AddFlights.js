import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const AddFlights = ({show,handleClose}) => {

  const[flightId,setFlightId]=useState('');

  const[flightName,setFlightName] = useState('');

  const[totalSeats,setSeats] = useState(0);

  const[economySeat,setEconomySeat]=useState(0);

  const[businessSeat,setBusinessSeat] = useState(0);

  const handleSubmit = async (event)=>{
    event.preventDefault();

    console.log(flightId);

    //api for adding
    try{
      const response = await fetch('http://127.0.0.1:5000/flights/admin/post/flights',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
            flightId : flightId,
            flightName : flightName,
            totalSeat : totalSeats,
            economySeat :economySeat,
            businessSeat :businessSeat
        })
      })

      const responseData = response.json();
      console.log(responseData);

      if(!response.ok){
        throw new Error(responseData.message);
      }
      else{
        handleClose();
      }
    }
    catch(err){
      console.log(err);
    }

    
  }

  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Flights</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="post"  onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label for="validationCustom03" class="form-label">Flight ID</label>
              <input type="text" class="form-control" id="validationCustom03" value={flightId} onChange={(event)=>setFlightId(event.target.value)} required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please enter the Flight Id
              </div>
            </div>

            <div className="col-md-4">
            <label for="validationCustom03" class="form-label">Flight Name</label>
              <input type="text" class="form-control" id="validationCustom03" value={flightName} onChange={(event)=>setFlightName(event.target.value)} required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please enter the Name of Flight
              </div>
            </div>

            <div className="col-md-4">
            <label for="validationCustom03" class="form-label">Total Seats</label>
              <input type="number" class="form-control" id="validationCustom03" value={totalSeats} onChange={(event)=>setSeats(event.target.value)} required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please enter the Total Number of Seats
              </div>
            </div>

            <div className="col-md-4">
            <label for="validationCustom03" class="form-label">Economy Seats</label>
              <input type="number" class="form-control" id="validationCustom03" value={economySeat} onChange={(event)=>setEconomySeat(event.target.value)} required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please enter the NUmber of Economy Seats
              </div>
            </div>

            <div className="col-md-4">
            <label for="validationCustom03" class="form-label">Business Seats</label>
              <input type="number" class="form-control" id="validationCustom03" value={businessSeat} onChange={(event)=>setBusinessSeat(event.target.value)} required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please enter the Number of Business Seats
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddFlights;
