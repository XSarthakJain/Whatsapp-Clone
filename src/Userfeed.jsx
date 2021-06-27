import React from 'react';
import Userfeedheader from './Userfeedheader';
import Chatwrapper  from './Chatwrapper';
import Bottomsendsection from './Bottomsendsection';
const Userfeed = ()=>{
    return (
        <React.Fragment>
            <Userfeedheader/>
            <Chatwrapper/>
            <Bottomsendsection/>
        </React.Fragment>
    );
}



export default Userfeed;