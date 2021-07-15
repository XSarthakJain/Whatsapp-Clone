import React from 'react';
import './css/Userprofileinfo.css';


let Userprofileinfo = (e)=>{
    return (
        <React.Fragment>
            <div className="UserprofileinfoWrapper">
                <label>{e.title}</label><br/>
                <p>{e.titleContaint}
                <span className="material-icons editProfileContaint">
                    edit
                </span>
                
                </p>
            </div>
        </React.Fragment>
    );
}

export default Userprofileinfo;