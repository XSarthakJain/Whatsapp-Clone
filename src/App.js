import React from 'react';
import './css/App.css';
import Leftdiv from './Leftdiv';
let App = ()=>{
  return (
    <React.Fragment>
      <div className="container">
        <div className="leftDiv">
          <Leftdiv/>
        </div>

        <div className="rightDiv">
          <h1>RightDiv</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;