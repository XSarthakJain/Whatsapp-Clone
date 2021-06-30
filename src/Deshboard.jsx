import React from 'react';
<<<<<<< HEAD
import Leftdiv from './Leftdiv.jsx';
=======
import Leftdiv from './Leftdiv';
>>>>>>> 402bc8d16722aa1ff7ed169258305615f7f1c462
import Rightdiv from './Rightdiv';
import './css/App.css';

let Deshboard = ()=>{
    return (
        <React.Fragment>
            <div className="container">
                <div className="leftDiv">
                <Leftdiv/>
                </div>

                <div className="rightDiv">
                <Rightdiv/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Deshboard;