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
                    <Gallery url="https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_f3ca06f4-0ea3-4795-818a-b680979e8073.jpg?v=1589268519"/>
                    <Gallery url="https://static.dezeen.com/uploads/2017/09/stranger-things-season-two-netflix-poster-design-graphics-852x1332.jpg"/>
                    <Gallery url="https://1.bp.blogspot.com/-oMm82GIcM20/XrfCJzjl7SI/AAAAAAAAusI/W9vrkav5Q88Ecue2RICrefqcOSYXdREvQCNcBGAsYHQ/s1600/Betaal-Poster-1.jpg"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contactinfomediasection;