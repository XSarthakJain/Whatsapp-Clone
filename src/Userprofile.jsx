import React from 'react';
import './css/UserprofileWrapper.css';
import Leftsidesliderheader from './Leftsidesliderheader';
import Userprofileinfo from './Userprofileinfo.jsx';
import user1 from './media/user1.jpg';

let Userprofile = ()=>{
    setTimeout(()=>{
        let AdminProfileImage = document.getElementsByClassName("AdminProfileImage")[0];
        AdminProfileImage.style.width="200px";
        AdminProfileImage.style.height="200px";
    },1000)
    return (
        <React.Fragment>
            <section className="UserprofileWrapper">
                <Leftsidesliderheader optionname="Profile"/>
                <img src={user1} alt="UserImageDP" className="AdminProfileImage"/>
                <Userprofileinfo title="Your Name" titleContaint="containt"/>
                <p className="UserProfileinfoMessage">This is not username or pin.This name will visible to your Whatsapp contacts.</p>
                <Userprofileinfo title="About" titleContaint="About Containt"/>
            </section>
        </React.Fragment>
    );
}



export default Userprofile;