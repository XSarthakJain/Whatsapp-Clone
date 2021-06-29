import React from 'react';
import './css/Userfeedheader.css';
import {NavLink} from 'react-router-dom';
import user2 from './media/user2.jpg';
let Userfeedheader = ()=>{
    return (
        <React.Fragment>
        <NavLink exact to="/profile">
            <header className="userFeedHeader">
                <div className="userProfilePic">
                    <img src={user2} alt="UserProfilePic"/>
                    <span>Utk@rsh</span>
                </div>

                <div className="UserProfileOptions">
                    <span class="material-icons">
                        more_vert
                    </span>

                    <NavLink exact to="/search">
                    <span class="material-icons">
                        search
                    </span>
                    </NavLink>
                </div>
            </header>
        </NavLink>
        </React.Fragment>
    );
}

export default Userfeedheader;