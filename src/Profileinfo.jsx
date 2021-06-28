import React from 'react';
import Userfeed from './Userfeed';
import Profileinfocontaint from './Profileinfocontaint.jsx';
import './css/Profileinfo.css';


let Profileinfo = ()=>{
    return (
        <React.Fragment>
            <div class="OuterProfileInfoSection">
            <div>
                <Userfeed/>
            </div>
            <div>
                <Profileinfocontaint/>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Profileinfo;