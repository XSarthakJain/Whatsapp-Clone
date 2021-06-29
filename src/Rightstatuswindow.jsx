import React from 'react';
import './css/Rightstatuswindow.css';
import { NavLink } from 'react-router-dom';
import Status from './media/Status.PNG';
let Rightstatuswindow = ()=>{
    return (
        <React.Fragment>
            <div className="RightStatusWindow">
            <div className="close">
            <NavLink exact to="/">
            <span className="material-icons">
                close
            </span>
            </NavLink>
            </div>
            
            <img src={Status} alt="Status Logo" className="statusLogo"/><br/>
            <span className="statusFeedMessage">Click on a contact to  view their status updates</span>
            
            </div>
        </React.Fragment>
    );
}



export default Rightstatuswindow;