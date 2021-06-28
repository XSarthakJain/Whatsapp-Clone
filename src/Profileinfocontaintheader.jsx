import React, {Component} from 'react';
import Profileinfocontaint from './Profileinfocontaint';
import './css/Profileinfocontaintheader.css';

let Profileinfocontaintheader = (params)=>{
    return (
        <React.Fragment>
            <header className="Profileinfocontaintheader">

                <span className="material-icons close">
                    close
                </span>
                <span className="headerTitle">{ params.name }</span>
            </header>
        </React.Fragment>
    );
}

export default Profileinfocontaintheader;