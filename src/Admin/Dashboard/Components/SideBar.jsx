import React, { useState } from 'react';
import '../Components/SideBar.css';
import {SideBarData} from '../../Data/Data';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
    
    const [selected,setSelected]=useState(0);

  return (
    <div className="Sidebar">
        <div className="menu">
            {SideBarData.map((data,index)=>{
                return(
                    <NavLink to={data.path} 
                    
                    className={({isActive})=> isActive ? 'menuItem active' : 'menuItem'}
                    key={index}
                    >
                        <data.icon/>
                        <span>{data.header}</span>
                    </NavLink>
                )
            })}
        </div>
    </div>
    
  )
}

export default SideBar;
