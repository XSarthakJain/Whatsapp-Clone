import React from 'react';
import Userfeed from './Userfeed';
import Searchchatinputbox from './Searchchatinputbox';
import './css/Profileinfo.css';

let Searchinputboxwrapper = ()=>{
    return (
        <React.Fragment>
            <div  className="OuterProfileInfoSection">
            <React.Fragment>
                <Userfeed/>
            </React.Fragment>
            <React.Fragment>
                <Searchchatinputbox/>
            </React.Fragment>
            </div>
        </React.Fragment>
    );
}



export default Searchinputboxwrapper;