import React, { useEffect, useState } from 'react'
import '../List/TripDetails.css';
import Button from 'react-bootstrap/Button';
import EditTrip from '../Edit/EditTrip';

const TripDetailsList = () => {

    const[tripDetails,setTripDetails]=useState([]);
    const[error,setError] = useState('');

    const[show,setShow]=useState(false);
    const[selectedTrips,setSelectedTrips]=useState(null);
    const editHandler=(data)=>{
        setSelectedTrips(data);
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }

    useEffect(()=>{
        const listOfTripDetails = async ()=>{
            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/flightdetails',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })

                const responseData = await response.json();
                console.log(responseData);

                if(!response.ok){
                    throw new Error(responseData.message || 'Fetching Failed',400);
                }
                else{
                    setTripDetails(responseData.flightdetails);
                }
            }
            catch(err){
                console.log(err);
                setError(err.message || 'Something went wrong');
            }
        }
        listOfTripDetails();
    },[])

    const handleDisable = async (id)=>{
        try{
            const response = await fetch(`http://127.0.0.1:5000/flights/admin/disable/flightdetails/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    flightId : id
                })
            })

            const responseData = response.json();

            if(!response.ok){
                throw new Error(responseData.message);
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className="trip-details container">
        {error ? <div ClassName='alert alert-danger'>{error}</div> : 
        <table className='table table-striped table-bordered'>
            <thead className='thead-dark'> 
            <tr>
                <th>SL.NO</th>
                <th>Flight ID</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Actions</th>
            </tr>
            </thead>
            {tripDetails.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{data.index}</td>
                        <td>{data.flightId}</td>
                        <td>{data.routeId.departure}</td>
                        <td>{data.routeId.arrival}</td>
                        <td>{data.depDate.slice(0,10)}</td>
                        <td>{data.arrivalDate.slice(0,10)}</td>
                        <td>{data.depTime}</td>
                        <td>{data.arrivalTime}</td>
                        <td>
                            <div className="edit">
                                <Button onClick={()=>editHandler(data)}>
                                    Edit
                                </Button>
                            </div>
                            <div className="disable">
                                <button onClick={()=>handleDisable(data.id)}>Disable</button>
                            </div>
                        </td>

                    </tr>
                )
            })}
            {
                selectedTrips && (
                    <EditTrip show={show} handleClose={handleClose} data={selectedTrips}/>
                )
            }
        </table>
        }
    </div>
  )
}

export default TripDetailsList
