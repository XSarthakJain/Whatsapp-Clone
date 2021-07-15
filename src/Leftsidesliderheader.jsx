import React from 'react';
import './css/Leftsidesliderheader.css';
import {NavLink} from 'react-router-dom';

let Leftsidesliderheader = (e)=>{
    return (
        <React.Fragment>
            <header className="LeftsidesliderheaderWrapper">
                <div className="LeftsidesliderheaderWrapperContaint">
                <NavLink exact to="/">
                <span class="material-icons">
                    west
                </span>
                </NavLink>
                <p>
                {e.optionname}
                </p>
                </div>
            </header>
        </React.Fragment>
    );
}



export default Leftsidesliderheader;