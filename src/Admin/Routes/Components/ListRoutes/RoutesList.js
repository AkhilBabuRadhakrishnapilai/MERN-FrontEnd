import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ListRoutes/RoutesList.css';
import Button  from 'react-bootstrap/Button';
import EditRoutes from '../EditRoutes/EditRoutes';

const RoutesList = () => {
    
    const navigate = useNavigate();
    const[routes,setRoutes]=useState([]);
    const [error,setError] = useState('');

    const[show,setShow]=useState(false);

    const[selectedRoutes,setSelectedRoutes]=useState(null);
    
    const editHandler=(data)=>{
        setSelectedRoutes(data);
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }
    useEffect(()=>{
        const listOfRoutes = async () =>{
            try{
                const response = await fetch('http://127.0.0.1:5000/flights/admin/get/routes',{
                    method:'GET',
                    headers:{
                        'Content-type':'application/json'
                    }
                })

                const responseData = await response.json();
                console.log(responseData);

                if(!response.ok){
                    throw new Error(responseData.message || 'Fetching Failed',400)
                }
                else{
                    setRoutes(responseData.routes);
                }
            }
            catch(err){
                console.log(err);
                setError(err.message || 'Something went wrong');
            }
        }
        listOfRoutes();
    },[])

    const handleDisable=async(id)=>{
        try{
            const response = await fetch(`http://127.0.0.1:5000/flights/admin/disable/routes/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'applicaton/json'
                },
                body:JSON.stringify({
                    routeId : id
                })
            })

            const responseData = await response.json();

            if(!response.ok){
                throw new Error(responseData.message)
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return(
    <div className="route-list container">
        {error ? <div className='alert alert-danger'>{error}</div> : 
        <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
            <tr>
                <th>SL.No</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            {routes.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{data.departure}</td>
                        <td>{data.arrival}</td>
                        <td>{data.price}</td>
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
                selectedRoutes && (
                    <EditRoutes show={show} handleClose={handleClose} data={selectedRoutes}/>
                )
            }
        </table>
        }
    </div>
  )
}

export default RoutesList
