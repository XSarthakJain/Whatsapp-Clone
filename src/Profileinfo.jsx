import React from 'react';
import Userfeed from './Userfeed';
import Profileinfocontaint from './Profileinfocontaint.jsx';
import './css/Profileinfo.css';


let Profileinfo = ()=>{
    return (
        <React.Fragment>
            <div  className="OuterProfileInfoSection">
            <React.Fragment>
                <Userfeed/>
            </React.Fragment>
            <React.Fragment>
                <Profileinfocontaint/>
            </React.Fragment>
            </div>
        </React.Fragment>
    );
}

export default Profileinfo;