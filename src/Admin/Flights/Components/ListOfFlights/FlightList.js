import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const FlightList = () => {

    const navigate = useNavigate();

    const[flights,setFlights]=useState([]);

    const [error,setError]=useState('');

    const editHandler = (id) =>{

        navigate(`/flights/update/${id}`)
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

  return (
    <div className="flight-list">
        {error ? <div className='error'>{error}</div>  :
        <table>
        <tr>
            <th>SL.No</th>
            <th>Flight Id</th>
            <th>Flight Name</th>
            <th>Total Seats</th>
            <th>Economy Seats</th>
            <th>Business Seats</th>
            <th>Actions</th>
        </tr>
        {flights.map((data,index)=>{
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{data.flightId}</td>
                    <td>{data.flightName}</td>
                    <td>{data.totalSeats}</td>
                    <td>{data.economySeat}</td>
                    <td>{data.businessSeat}</td>
                    <td>
                        <div className="edit">
                            <button onClick={()=>editHandler(data.id)}>Edit</button>
                        </div>
                        <div className="disbale">
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

export default FlightList;
