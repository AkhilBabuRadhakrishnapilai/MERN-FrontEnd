import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditTrip = ({show,handleClose,data}) => {

    //list of flights
    const[flights,setFlights]=useState([]);
    //flight type domestic or international
    const[type,setType]=useState([]);
    //routes list
    const[routes,setRoutes]=useState([]);
    //dep date
    const[depDate,setDate]=useState('');
    //dep time
    const[depTime,setTime]=useState('');
    //arrival date
    const[arrivalDate,setArrivalDate]=useState('');
    //arrival time
    const[arrivalTime,setArrivalTime]=useState('');

    useEffect(()=>{
        //list of flights
        const listOfFlights=async()=>{
            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/flights',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const responseData = await response.json();
                console.log(responseData);
                
                if(!response.ok){
                    throw new Error(responseData.message)
                }
                else{
                    setFlights(responseData.flights);
                }
            }
            catch(err){
                console.log(err);
            }
        }

        //type domestic / interntional
        const typeList = async()=>{
            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/typesoftravel',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const responseData = await response.json();
                
                if(!response.ok){
                    throw new Error(responseData.message)
                }
                else{
                    setType(responseData.types)
                }
            }
            catch(err){
                console.log(err);
            }
        }

        //routes list
        const listOfRoutes = async ()=>{
            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/routes',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const responseData = await response.json();

                if(!response.ok){
                    throw new Error(responseData.message)
                }
                else{
                    setRoutes(responseData.routes)
                }
            }
            catch(err){
                console.log(err);
            }
        }

        listOfFlights();
        typeList();
        listOfRoutes();
    },[])

    //selected flight
    const[selectedFlight,setSelectedFlight]=useState('');
    //selected type
    const[selectedType,setSelectedType]=useState('');
    //selected Routes
    const[selectedRoutes,setSelectedRoutes]=useState('');

    useEffect(()=>{
        if(data){
            setSelectedFlight(data.flightId);
            setSelectedType(data.flightType);
            setSelectedRoutes(data.id);
            setDate(data.depDate);
            setTime(data.depTime);
            setArrivalDate(data.arrivalDate);
            setArrivalTime(data.arrivalTime);
        }
    },[data])

    const handleSubmit = (event)=>{
        event.preventDefault();

    }
  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header closeButton>
        <Modal.Title>Edit Trip Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form  method="post" onSubmit={handleSubmit}>
            
            {/* choosing flight */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Flight</label>
            <select value={selectedFlight} onChange={(event)=>setSelectedFlight(event.target.value)}>
                <option value="">Choose your Flight</option>
                {flights.map((data)=>{
                    return(
                        <option key={data.id} value={data.flightName}>
                            {data.flightName}
                        </option>
                    )
                })}
            </select>
            </div>

            {/* type-domestic or international */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Type of Flight</label>
            <select value={selectedType} onChange={(event)=>setSelectedType(event.target.value)}>
                <option value="">Choose the Flight Type</option>
                {type.map((data)=>{
                    return(
                        <option key={data.id} value={data.flightType}>
                            {data.flightType}
                        </option>
                    )
                })}
            </select>
            </div>
            
            {/* routes */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Route</label>
            <select value={selectedRoutes} onChange={(event)=>setSelectedRoutes(event.target.value)}>
                <option value="">Choose the Route</option>
                {routes.map((data)=>{
                    return(
                        <option key={data.id} value={data.id}>
                            {data.departure}-{data.arrival}
                        </option>
                    )
                })}
            </select>
            </div>

            {/* dep date */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Departure Date</label>
            <input type="date"  value={depDate} onChange={(event)=>setDate(event.target.value)}/>
            </div>

            {/* deptime */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Departure Time</label>
            <input type='time' value={depTime} onChange={(event)=>setTime(event.target.value)}/>
            </div>

            {/* arrival date */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Arrival Date</label>
            <input type="date" value={arrivalDate} onChange={(event)=>setArrivalDate(event.target.value)}/>
            </div>

            {/* arrival time */}
            <div className="col-md-4">
            <label for="validationCustom03" className="form-label">Arrival Time</label>
            <input type="time" value={arrivalTime} onChange={(event)=>setArrivalTime(event.target.value)}/>
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

export default EditTrip
