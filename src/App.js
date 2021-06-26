import React from 'react';
import './css/App.css';
let App = ()=>{
  return (
    <React.Fragment>
      <div className="container">
        <div className="leftDiv">
          <h1>LeftDiv</h1>
        </div>

        <div className="rightDiv">
          <h1>RightDiv</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;