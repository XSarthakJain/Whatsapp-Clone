import React from 'react';
import './css/leftdivsearchbar.css';


const Leftdivsearchbar = ()=>{
    return (
        <React.Fragment>
            <div className="searchBarOuter">
                <div className="textOuter">
                    <span class="material-icons">
                        search
                    </span>
                    <input type="text" placeholder="Search or Start new chat"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Leftdivsearchbar;