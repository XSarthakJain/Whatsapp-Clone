import React from 'react';
import Userfeed from './Userfeed';
import './css/Profileinfo.css';

let Profileinfo = ()=>{
    return (
        <React.Fragment>
            <div class="OuterProfileInfoSection">
            <div>
                <Userfeed/>
            </div>
            <div>
            <h1>Profile Infomation</h1>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Profileinfo;