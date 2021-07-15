import React from 'react';
import './css/leftNavBar.css';
import { NavLink } from 'react-router-dom';
import admin from './media/admin.jpg';
let Leftnavbar = ()=>{
    return (
        <header>
            <div>
                <NavLink exact to="/Userprofile">
                <img src={admin} alt="DP"/>
                </NavLink>
            </div>

            <div className="leftsideheaderOptionOuter">
            <NavLink exact to="/status">
            <span className="material-icons  leftsideheaderOption">
                settings_backup_restore
            </span>
            </NavLink>

            <span className="material-icons leftsideheaderOption">
                message
            </span>

            <span className="material-icons leftsideheaderOption">
                more_vert
            </span>
            </div>

        </header>
    );
}

export default Leftnavbar;