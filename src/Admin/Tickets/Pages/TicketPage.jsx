import React from 'react'
import Nav from '../../../Shared/NavAfterLogin/Pages/Nav';
import SideBar from '../../Dashboard/Components/SideBar';
import TicketList from '../Components/TicketList/TicketList';

const TicketPage = () => {
  return (
    <div className="ticket-page">
        <div className="container-fluid">
            <div className="row">
                <Nav/>
            </div>
            <div className="row">
                <div className="col-md-auto">
                    <SideBar/>
                </div>
                <div className="col-md-auto">
                    <TicketList/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TicketPage;
