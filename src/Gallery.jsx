import React from 'react';
import './css/Gallery.css';


let Gallery = (params)=>{
    return (
        <React.Fragment>
            <img src={params.url} alt="media" className="GalleryImage"/>
        </React.Fragment>
    );
}



export default Gallery;