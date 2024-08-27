import React, { useEffect, useState } from 'react';
import '../TicketList/TicketList.css';

const TicketList = () => {

    const[tickets,setTickets]=useState([]);

    const[error,setError]=useState('');

    useEffect(()=>{

        const listOfTickets=async()=>{
            try{
                const response = await fetch(`http://127.0.0.1:5000/flights/admin/get/bookingdetails`,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                
                const responseData = await response.json();

                if(!response.ok){
                    throw new Error(responseData.messgae)
                }
                else{
                    setTickets(responseData.tickets)
                }
            }
            catch(err){
                console.log(err);
                setError(err.messgae || 'Something went wrong')
            }
        }

        listOfTickets();
    },[])

  return (
    
    <div className='ticket-lists container'>
      {error ? <div className='alert alert-danger'>{error}</div> : 
      <table className='table table-striped table-bordered'>
        <thead className='thead-dark'>
        <tr>
            <th>UserId</th>
            <th>Flight Id</th>
            <th>Starting Date</th>
            <th>Route Id</th>
            <th>Class</th>
            <th>Total Price</th>
            <th>Category</th>
            <th>Type of Travel</th>
            <th>End Date</th>
            <th>Payment Id</th>
        </tr>
        </thead>
        
            {tickets.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{data.userId}</td>
                        <td>{data.flightId}</td>
                        <td>{data.startingDate}</td>
                        <td>{data.routeId}</td>
                        <td>{data.seatClassId}</td>
                        <td>{data.totalPrice}</td>
                        <td>{data.category}</td>
                        <td>{data.typeOfTravel}</td>
                        <td>{data.endDate}</td>
                        <td>{data.paymentId}</td>
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

export default TicketList
