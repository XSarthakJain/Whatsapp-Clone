import React from 'react';
import Profileinfocontaintheader from './Profileinfocontaintheader.jsx';
import './css/Searchchatinputbox.css';
import Leftdivsearchbar from './Leftdivsearchbar.jsx';

let Searchchatinputbox = ()=>{
    setTimeout(()=>{
            let search = document.getElementsByClassName("LeftdivSearchBarWrapper")[0];
            if(search!=undefined){
            search.classList.add("LeftdivSearchBarWrapperAfter");
        }
        },100);
    return (
        <React.Fragment>
            <div className="Searchchatinputbox">
            <Profileinfocontaintheader name="SearchMessages"/>

            <div className="LeftdivSearchBarWrapper">
            <Leftdivsearchbar title="Search..."/>
            <p>Search for messages with Self.</p>
            </div>
            </div>
        </React.Fragment>
    );
}



export default Searchchatinputbox;