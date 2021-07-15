import React from 'react';
import Leftdiv from './Leftdiv.jsx';
import Userprofile from './Userprofile.jsx';
import Rightdiv from './Rightdiv';
import './css/App.css';
import {Switch,Route} from 'react-router-dom';
let Deshboard = ()=>{
    return (
        <React.Fragment>
            <div className="container">
                <div className="leftDiv">
                <Switch>
                    <Route exact path="/userprofile" component={Userprofile}/>
                    <Route component={Leftdiv}/>
                </Switch>
                {/* <Leftdiv/> */}
                </div>

                <div className="rightDiv">
                <Rightdiv/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Deshboard;