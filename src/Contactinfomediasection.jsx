import React from 'react';
import Contactinfodpsection from './Contactinfodpsection';
import Gallery from './Gallery';
import './css/Contactinfomediasection.css';


let Contactinfomediasection = ()=>{
    return (
        <React.Fragment>
            <div className="ContactinfomediasectionOuter">
                <div className="ContactinfomediasectionTitle">
                    <a href="#">Media, Links and Docs</a>
                    <span class="material-icons">
                        navigate_next
                    </span>
                </div>

                <div className="GalleryOuter">
                    <Gallery url="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/>
                    <Gallery url="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/>
                    <Gallery url="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contactinfomediasection;