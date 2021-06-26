import React from 'react';
import Leftnavbar from './Leftnavbar'
import Leftdivsearchbar from './Leftdivsearchbar';
import Userwall from './Userwalls';
import './css/leftdiv.css';
import {NavLink} from 'react-router-dom';

let imgAdd = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGkW1DCMD89Ipwnjrge4SYuZFpJHJDYrGu0N1Utwxz3ZeWgcQsht_u6Vt0spe9WZZiY&usqp=CAU";
let Leftdiv = ()=>{
    return (
        <React.Fragment>
            <Leftnavbar/>
            <Leftdivsearchbar/>
            <div className="profileDatails">
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Bro" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd}/></NavLink>
            </div>
        </React.Fragment>
    );
}



export default Leftdiv;