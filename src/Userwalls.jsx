import React from 'react';
import './css/userwall.css';


let Userwalls = ()=>{
    return (
        <React.Fragment>
            <section>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGkW1DCMD89Ipwnjrge4SYuZFpJHJDYrGu0N1Utwxz3ZeWgcQsht_u6Vt0spe9WZZiY&usqp=CAU" alt="personDP"/>
                <div>
                <div className="profileInfo">
                    <h4>Self</h4>
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