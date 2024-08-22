import React, { useContext } from 'react';
import '../Pages/DashPage.css';
import SignupContext from '../../../Shared/Context/signupContext';
import NavBar from '../../../Shared/NavBar/NavBar';
import SideBar from '../Components/SideBar';


const DashPage = () => {
  
  const user = useContext(SignupContext);
  console.log(user);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <NavBar/>
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
