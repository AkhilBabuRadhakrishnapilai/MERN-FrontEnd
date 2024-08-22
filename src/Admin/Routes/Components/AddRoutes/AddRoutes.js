import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddRoutes = ({show,handleClose}) => {

    const[error,setError]=useState('');

    const[locations,setLocations]=useState([]);

    useEffect(()=>{
        const listOfLocations = async()=>{

            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/airports',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const responseData = await response.json();
                console.log('API response',responseData);

                if(!response.ok){
                    throw new Error(responseData.message);
                }
                else{
                    setLocations(responseData.airports);
                    console.log('Locations',responseData.airports);
                }
                
                
            }
            catch(err){
                console.log(err)
                setError(err);
            }
        };
        listOfLocations();
    },[])

    const[selectedValue,setSelectedValue]=useState('');
    const[arrivalAir,setArrivalAir]=useState('');
    const[routePrice,setPrice]=useState(0);

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            const response = await fetch('http://127.0.0.1:5000/flights/admin/post/routes',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    departure:selectedValue,
                    arrival:arrivalAir,
                    price:routePrice
                })
            })

            const responseData = await response.json();
            console.log("Adding response",responseData);

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

    console.log(locations,"checking array");
  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
    <Modal.Header closeButton>
        <Modal.Title>Add Routes</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form  method="post" onSubmit={handleSubmit}>
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Departure</label>
            <select value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}>
                <option value="">Select an Airport</option>
                {locations.map((data)=>{
                    return(
                        <option key={data.id} value={data.airportName}>
                        {data.airportName}
                    </option>
                    )
                })}
            </select>
            </div>
            <div className="col-md-4">
            <label for="validationCustom03" class="form-label">Arrival</label>
            <select value={arrivalAir} onChange={(event)=>setArrivalAir(event.target.value)}>
                <option value="">Select an Airport</option>
                {locations.map((data)=>{
                    return(
                        <option key={data.id} value={data.airportName}>
                        {data.airportName}
                    </option>
                    )
                })}
            </select>
            </div>
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Price</label>
            <input type="number" className="form-control" id="validationCustom03" value={routePrice} onChange={(event)=>setPrice(event.target.value)} required />
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                Please enter the Price
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

export default AddRoutes
