import React from 'react';
import './css/Contactinfopermission.css';


let Contactinfopermission = (params)=>{
    return (
        <React.Fragment>
            <div className="ContactinfoPermission">
                <span className="permissionTitle">{params.permissionTitle}</span>
                <span className="material-icons PermissionRedirectIcon">
                    {params.PermissionRedirectIcon}
                </span><br/>
                <small className="status">{params.status}</small>
            </div>
        </React.Fragment>
    );
}



export default Contactinfopermission;