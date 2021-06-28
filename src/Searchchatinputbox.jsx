import React from 'react';
import Profileinfocontaintheader from './Profileinfocontaintheader.jsx';
import './css/Searchchatinputbox.css';
import Leftdivsearchbar from './Leftdivsearchbar.jsx';

let Searchchatinputbox = ()=>{
    return (
        <React.Fragment>
            <div className="Searchchatinputbox">
            <Profileinfocontaintheader name="SearchMessages"/>
            <Leftdivsearchbar title="Search..."/>
            <p>Search for messages with Self.</p>
            </div>
        </React.Fragment>
    );
}



export default Searchchatinputbox;