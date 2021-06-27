import React from 'react';
import './css/Userfeedheader.css';


let Userfeedheader = ()=>{
    return (
        <React.Fragment>
            <header className="userFeedHeader">
                <div className="userProfilePic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGkW1DCMD89Ipwnjrge4SYuZFpJHJDYrGu0N1Utwxz3ZeWgcQsht_u6Vt0spe9WZZiY&usqp=CAU" alt="UserProfilePic"/>
                    <span>self</span>
                </div>

                <div className="UserProfileOptions">
                    <span class="material-icons">
                        more_vert
                    </span>

                    <span class="material-icons">
                        search
                    </span>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Userfeedheader;