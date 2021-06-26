import React from 'react';
import './css/leftNavBar.css';
let Leftnavbar = ()=>{
    return (
        <header>
            <div>
                <img src="https://machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg" alt="DP"/>
            </div>

            <div className="leftsideheaderOptionOuter">
            <span className="material-icons  leftsideheaderOption">
                settings_backup_restore
            </span>

            <span className="material-icons leftsideheaderOption">
                message
            </span>

            <span className="material-icons leftsideheaderOption">
                more_vert
            </span>
            </div>

        </header>
    );
}

export default Leftnavbar;