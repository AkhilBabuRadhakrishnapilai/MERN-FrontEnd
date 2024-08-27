import React, { useContext } from 'react';
import '../Pages/DashPage.css';
import SignupContext from '../../../Shared/Context/signupContext';
import Nav from '../../../Shared/NavAfterLogin/Pages/Nav';
import SideBar from '../Components/SideBar';


const DashPage = () => {
  
  const user = useContext(SignupContext);
  console.log(user);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Nav/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="App">
            <div className="AppGlass">
              <SideBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default DashPage;
