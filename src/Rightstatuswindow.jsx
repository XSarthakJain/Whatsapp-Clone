import React from 'react';
import './css/Rightstatuswindow.css';
import { NavLink } from 'react-router-dom';
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

            <div className="statusFeedMessageWrapper">
            <span className="statusFeedMessage">Click on a contact to  view their status updates</span>
            </div>
            
            </div>
        </React.Fragment>
    );
}



export default Rightstatuswindow;