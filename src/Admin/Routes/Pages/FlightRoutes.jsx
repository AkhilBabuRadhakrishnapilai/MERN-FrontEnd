import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import AddRoutes from '../Components/AddRoutes/AddRoutes';
import SideBar from '../../Dashboard/Components/SideBar';
import Nav from '../../../Shared/NavAfterLogin/Pages/Nav';
import RoutesList from '../Components/ListRoutes/RoutesList';
import '../Pages/FlightRoutes.css';

const FlightRoutes = () => {

    const[show,setShow] = useState(false);
    const handleShow=()=>{
    setShow(true);
    }
    const handleClose=()=>{
    setShow(false);
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <SideBar/>
        </div>
        <div className="col-md-10">
          <div className='d-flex justify-content-between align-items-center mb-3'>
          <Button variant='primary' onClick={handleShow}>
            Add Routes
          </Button>
          <AddRoutes show={show} handleClose={handleClose}/>
          </div>
          <RoutesList/>
        </div>
      </div>
    </div>
  )
}

export default FlightRoutes
