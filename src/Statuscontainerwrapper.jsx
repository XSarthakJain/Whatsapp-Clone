import React from 'react';
import './css/Statuscontainerwrapper.css';
import Leftstatuswindow from './Leftstatuswindow.jsx';
import RightStatusWindow from './Rightstatuswindow.jsx';
let Statuscontainerwrapper = ()=>{
    return (
        <React.Fragment>
            <div className="Statuscontainerwrapper">
                <div className="LeftStatusOuterWrapper">
                <Leftstatuswindow/>
                </div>

                <div className="Statuscontainerwrapper">
                <RightStatusWindow/>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Statuscontainerwrapper;