import React from 'react';
import Emptypage from './Emptypage';
import Userfeed from './Userfeed';
import {Route,Switch} from 'react-router-dom';

let Rightdiv = ()=>{
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/chat" component={Userfeed}/>
                <Route component={Emptypage}/>
            </Switch>
        </React.Fragment>
    );
}
export default Rightdiv;