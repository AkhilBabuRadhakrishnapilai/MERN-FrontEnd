import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoutesList = () => {
    
    const navigate = useNavigate();
    const[routes,setRoutes]=useState([]);
    const [error,setError] = useState('');

    const editHandler = (id) =>{
        navigate(`/routes/update/${id}`);
    }
    useState(()=>{
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

  return(
    <div className="route-list">
        {error ? <div className='error'>{error}</div> : 
        <table>
            <tr>
                <th>SL.No</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            {routes.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{data.departure}</td>
                        <td>{data.arrival}</td>
                        <td>{data.price}</td>
                        <td>
                            <div className="edit">
                                <button onClick={()=>editHandler(data.id)}>Edit</button>
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

export default RoutesList
