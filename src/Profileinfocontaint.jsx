import React from 'react';
import Profileinfocontaintheader from './Profileinfocontaintheader.jsx';
import Contactinfodpsection from './Contactinfodpsection.jsx';
import Contactinfomediasection from './Contactinfomediasection.jsx';
import Contactinfopermission from './Contactinfopermission.jsx';
import './css/Profileinfocontaint.css';

let Profileinfocontaint = ()=>{
    
setTimeout(()=>{
    let profile = document.getElementsByClassName("ProfileinfocontaintInner")[0];
    if(profile!=undefined){
    profile.classList.add("ProfileinfocontaintInnerAfterEffect");
   }
},100);
    return (
        <React.Fragment>
            <section className="ProfileinfocontaintOuter">
                <Profileinfocontaintheader name="ContactInfo" />

                <div className="ProfileinfocontaintInner">
                <div class="ContactinfodpsectionOuter">
                <Contactinfodpsection/>
                </div>
                <div className="ContactinfomediasectionOuter">
                <Contactinfomediasection/>
                </div>

                <div className="ContactinfoPermissionSection">
                <Contactinfopermission permissionTitle="Mute notification" PermissionRedirectIcon="check_box_outline_blank" />
                <Contactinfopermission permissionTitle="Starred Messages" PermissionRedirectIcon="navigate_next" />
                <Contactinfopermission permissionTitle="Mute notification" PermissionRedirectIcon="navigate_next" status="Off"/>

                

                </div>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Profileinfocontaint;