import React from 'react';
import './css/Userstatus.css';
import logo from './logo.svg';

let Userstatus = (param)=>{
    let adminDP = param.admin;
    return (
        <React.Fragment>
            <div className={`userstatusWrapper ${adminDP}`} >
                <img src={param.pic} alt="DP" className={adminDP}/>
                <div className="statusPersonInfo">
                        <span className="StatusHolderName">{param.name}</span><br/>
                        <span className="StatusUpdate">{param.status}</span>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Userstatus;