import React from 'react';
import './css/Rightstatuswindow.css';


let Rightstatuswindow = ()=>{
    return (
        <React.Fragment>
            <div className="RightStatusWindow">
            <div className="close">
            <span className="material-icons">
                close
            </span>
            </div>

            <div className="statusFeedMessageWrapper">
            <span className="statusFeedMessage">Click on a contact to  view their status updates</span>
            </div>
            
            </div>
        </React.Fragment>
    );
}



export default Rightstatuswindow;