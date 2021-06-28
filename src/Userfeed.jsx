import React from 'react';
import Userfeedheader from './Userfeedheader';
import Chatwrapper  from './Chatwrapper';
import Bottomsendsection from './Bottomsendsection';
import './css/Userfeed.css';
const Userfeed = ()=>{
    return (
        <React.Fragment>
            <div className="UserfeedOuter">
            <Userfeedheader/>
            <Chatwrapper/>
            <Bottomsendsection/>
            </div>
        </React.Fragment>
    );
}



export default Userfeed;