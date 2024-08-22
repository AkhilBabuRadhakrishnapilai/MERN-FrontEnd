import { ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react'

const TripDetailsList = () => {

    const[tripDetails,setTripDetails]=useState([]);
    const[error,setError] = useState('');


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
                    setTripDetails(responseData);
                }
            }
            catch(err){
                console.log(err);
                setError(err.message || 'Something went wrong');
            }
        }
        listOfTripDetails();
    },[])

  return (
    <div className="trip-details">
        {error ? <div ClassName='error'>{error}</div> : 
        <table>
            <tr>
                <th>SL.NO</th>
                <th>Flight ID</th>
                <th>Route ID</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Actions</th>
            </tr>
            {tripDetails.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{data.flightId}</td>
                        <td>{data.routeId}</td>
                        <td>{data.depDate}</td>
                        <td>{data.arrivalDate}</td>
                        <td>{data.depTime}</td>
                        <td>{data.arrivalDate}</td>
                        <td>
                            <div className="edit">
                                <button>Edit</button>
                            </div>
                            <div className="disable">
                                <button>Disable</button>
                            </div>
                        </td>

                    </tr>
                )
            })}
        </table>
        }
    </div>
  )
}

export default TripDetailsList
