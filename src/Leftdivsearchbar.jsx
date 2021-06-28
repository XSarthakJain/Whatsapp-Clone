import React from 'react';
import './css/leftdivsearchbar.css';


const Leftdivsearchbar = (param)=>{
    return (
        <React.Fragment>
            <div className="searchBarOuter">
                <div className="textOuter">
                    <span class="material-icons">
                        search
                    </span>
                    <input type="text" placeholder={param.title}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Leftdivsearchbar;