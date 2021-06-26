import React from 'react';
import './css/App.css';
import Leftdiv from './Leftdiv';
import Rightdiv from './Rightdiv';
let App = ()=>{
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

export default App;