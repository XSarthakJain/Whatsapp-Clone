import React from 'react';
import Leftnavbar from './LeftNavBar.jsx'
import Leftdivsearchbar from './Leftdivsearchbar';
import Userwall from './Userwalls';
import './css/leftdiv.css';
import user1 from './media/user1.jpg';
import user2 from './media/user2.jpg';
import user3 from './media/user3.jpg';
import user4 from './media/user4.jpg';
import user5 from './media/user5.jpg';
import user6 from './media/user6.jpg';
import {NavLink} from 'react-router-dom';

let imgAdd = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGkW1DCMD89Ipwnjrge4SYuZFpJHJDYrGu0N1Utwxz3ZeWgcQsht_u6Vt0spe9WZZiY&usqp=CAU";
let Leftdiv = ()=>{
    return (
        <React.Fragment>
            <Leftnavbar/>
            <Leftdivsearchbar title="Search or Start new chat"/>
            <div className="profileDatails">
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={user1} time="4:46 PM" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Utk@rsh" imgadd={user2} time="Wednesday" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Dd" imgadd={user3} time="6/12/2021" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Virraj" imgadd={user4} time="6/19/2021" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="N. K MISHRA HOD SIR" imgadd={user5} time="6/19/2021" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Vivek Pandey Sir" imgadd={user6} time="6/16/21" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd} time="4:46 PM" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            <NavLink exact to="/chat"><Userwall name="Self" imgadd={imgAdd} time="4:46 PM" containt="Tahir Sir : The Online Test is Schedule Today."/></NavLink>
            </div>
        </React.Fragment>
    );
}



export default Leftdiv;