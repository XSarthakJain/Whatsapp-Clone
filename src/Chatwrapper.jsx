import React from 'react';
import './css/Chatwrapper.css';
import Chat from './Chat';

let Chatwrapper = ()=>{
    return (
        <React.Fragment>
            <section className="chatWrapper">
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
            </section>
        </React.Fragment>
    );
}

export default Chatwrapper;