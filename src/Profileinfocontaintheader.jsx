import React, {Component} from 'react';
import Profileinfocontaint from './Profileinfocontaint';
import './css/Profileinfocontaintheader.css';
import {NavLink} from 'react-router-dom';


let Profileinfocontaintheader = (params)=>{
    return (
        <React.Fragment>
            <header className="Profileinfocontaintheader">
                <NavLink exact to="/chat">
                <span className="material-icons close">
                    close
                </span>
                </NavLink>
                <span className="headerTitle">{ params.name }</span>
            </header>
        </React.Fragment>
    );
}

export default Profileinfocontaintheader;