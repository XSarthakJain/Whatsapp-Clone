import React from 'react';
import Leftdiv from './Leftdiv';
import Rightdiv from './Rightdiv';
import './css/App.css';

let Deshboard = ()=>{
    return (
        <React.Fragment>
            <div className="container">
                <div className="leftDiv">
                <Leftdiv/>
                </div>

                <div className="rightDiv">
                <Rightdiv/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Deshboard;