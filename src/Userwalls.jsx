import React from 'react';
import './css/userwall.css';


let Userwalls = (params)=>{
    
    return (
        <React.Fragment>
            <section class="userWall">
                <img src={params.imgadd} alt="personDP"/>
                <div>
                <div className="profileInfo">
                    <h4>{params.name}</h4>
                    <p>Tahir Sir : The Online Test is Schedule Today.</p>
                </div>
                <div>
                <span>6/19/2021</span>
                <span className="material-icons arrow">
                    keyboard_arrow_down
                </span>
                </div>
                </div>
            </section>
            
        </React.Fragment>
    );
}

export default Userwalls;