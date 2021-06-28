import React from 'react';
import './css/Userfeedheader.css';
import {NavLink} from 'react-router-dom';

let Userfeedheader = ()=>{
    return (
        <React.Fragment>
        <NavLink exact to="/profile">
            <header className="userFeedHeader">
                <div className="userProfilePic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGkW1DCMD89Ipwnjrge4SYuZFpJHJDYrGu0N1Utwxz3ZeWgcQsht_u6Vt0spe9WZZiY&usqp=CAU" alt="UserProfilePic"/>
                    <span>self</span>
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