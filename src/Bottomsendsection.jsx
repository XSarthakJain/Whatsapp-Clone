import React from 'react';
import './css/Bottomsendsection.css';

let TypingStart=()=>{
    let textVal = document.getElementsByClassName("messageBox")[0].value;
    if(textVal.length >0){
    document.getElementsByClassName("sendMic")[0].style.display="none";
    document.getElementsByClassName("sendButton")[0].style.display="block";
    }
    else{
        document.getElementsByClassName("sendMic")[0].style.display="block";
        document.getElementsByClassName("sendButton")[0].style.display="none";
    }
}

let Bottomsendsection = ()=>{
    return (
        <React.Fragment>
            <section className="sendMessageOuter">
            <span className="material-icons sendSmile">
                sentiment_satisfied_alt
            </span>

            <span className="material-icons sendAttachment">
                attach_file
            </span>

            <input type="text" placeholder="Type a message" className="messageBox" onInput={TypingStart} autoFocus/>

            <span className="material-icons sendMic">
                mic
            </span>

            <span className="material-icons sendButton">
                send
            </span>
            </section>
        </React.Fragment>
    );
}

export default Bottomsendsection;