import React from 'react';
import Leftnavbar from './Leftnavbar'
import Leftdivsearchbar from './Leftdivsearchbar';
import Userwall from './Userwalls';
import './css/leftdiv.css';
let Leftdiv = ()=>{
    return (
        <React.Fragment>
            <Leftnavbar/>
            <Leftdivsearchbar/>
            <div className="profileDatails">
            <Userwall/>
            <Userwall/>
            <Userwall/>
            <Userwall/>
            <Userwall/>
            <Userwall/>
            <Userwall/>
            <Userwall/>
            </div>
        </React.Fragment>
    );
}



export default Leftdiv;