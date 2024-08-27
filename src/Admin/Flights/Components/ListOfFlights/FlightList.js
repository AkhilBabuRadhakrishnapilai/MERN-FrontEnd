import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../ListOfFlights/FlightList.css';
import { Button } from 'react-bootstrap';
import EditFlight from '../EditFlights/EditFlights';

const FlightList = () => {

    const navigate = useNavigate();

    const[flights,setFlights]=useState([]);

    const [error,setError]=useState('');

    // const editHandler = (id) =>{

    //     navigate(`/flights/update/${id}`)
    // }

    const[show,setShow]=useState(false);

    const [selectedFlight, setSelectedFlight] = useState(null); // Add state to store selected flight data

    const editHandler = (flight) => {
        setSelectedFlight(flight); // Set selected flight data
        setShow(true);
    };
    const handleClose=()=>{
        setShow(false);
    }

    useEffect(()=>{
        const listFromDb =async()=>{
            try{
                const flightDb = await fetch('http://127.0.0.1:5000/flights/admin/get/flights',{
                    method:'GET',
                    headers:{
                        'Content-type' : 'application/json'
                    }
                })
                

                const responseData = await flightDb.json();
                console.log("API Response",responseData);

                if(!flightDb.ok){
                    throw new Error(responseData.message || 'Failed to fetch')
                }
                else{
                    setFlights(responseData.flights);
                }
            }
            catch(err){
                console.log(err);
                setError(err.message || 'Something went wrong');
            }
        }
        listFromDb();
    },[])

    const handleDisabler=async(id)=>{
        console.log(id);
        try{
            const response = await fetch(`http://127.0.0.1:5000/flights/admin/disable/flights/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    fliId : id
                })
            })

            const responseData = await response.json();
            console.log(responseData);

            if(!response.ok){
                throw new Error(responseData.message)
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className="flight-list container">
        {error ? <div className='alert alert-danger'>{error}</div>  :
        <table className='table table-striped table-bordered'>
        <thead className='thead-dark'>
        <tr>
            <th>SL.No</th>
            <th>Flight Id</th>
            <th>Flight Name</th>
            <th>Total Seats</th>
            <th>Economy Seats</th>
            <th>Business Seats</th>
            <th>Actions</th>
        </tr>
        </thead>
        {flights.map((data,index)=>{
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{data.flightId}</td>
                    <td>{data.flightName}</td>
                    <td>{data.totalSeat}</td>
                    <td>{data.economySeat}</td>
                    <td>{data.businessSeat}</td>
                    <td>
                        <div className="edit">
                            <Button onClick={() => editHandler(data)}>
                                Edit
                            </Button>
                            {/* <EditFlight show={show} handleClose={handleClose}/> */}
                            {/* <button onClick={()=>editHandler(data.id)}>Edit</button> */}
                        </div>
                        <div className="disable">
                            <button onClick={()=>handleDisabler(data.id)}>Disable</button>
                        </div>
                    </td>
                </tr>
            )
        })}
         {selectedFlight && (
                <EditFlight show={show} handleClose={handleClose} data={selectedFlight} />
        )}
    </table>   
    }
        
    </div>
  )
}

export default FlightList;
