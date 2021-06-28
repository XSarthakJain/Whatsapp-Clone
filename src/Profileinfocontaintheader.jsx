import React, {Component} from 'react';
import Profileinfocontaint from './Profileinfocontaint';
import './css/Profileinfocontaintheader.css';

let Profileinfocontaintheader = (params)=>{
    return (
        <React.Fragment>
            <header className="Profileinfocontaintheader">
                <h4>{ params.name }</h4>
            </header>
        </React.Fragment>
    );
}

export default Profileinfocontaintheader;