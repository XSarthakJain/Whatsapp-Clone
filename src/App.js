import React from 'react';
import Statuscontainerwrapper from './Statuscontainerwrapper.jsx';
import Deshboard from './Deshboard';
import {Switch,Route} from 'react-router-dom';
let App = ()=>{
  return (
    <React.Fragment>
      <Switch>
      <Route exact path="/status" component={Statuscontainerwrapper}/>
      <Route component={Deshboard}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;