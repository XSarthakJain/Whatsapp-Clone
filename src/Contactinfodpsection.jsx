import React from 'react';
import './css/Contactinfodpsection.css';
import user2 from './media/user2.jpg';

let Contactinfodpsection = ()=>{
    return (
        <React.Fragment>
            <div className="Contactinfodpsection">
                <div class="ContactinfodpsectionDP">
                <img src={user2} alt="DP here"/>
                </div>
                <span>Utk@rsh</span>
            </div>
        </React.Fragment>
    );
}



export default Contactinfodpsection;