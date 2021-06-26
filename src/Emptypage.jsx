import React from 'react';
import './css/emptypage.css';


let Emptypage = ()=>{
    return (
        <React.Fragment>
            <div className="emptypage">
                <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="Empty Page" />
                <br/>
                <h1>Keep your phone connected</h1>
                <p>Whatsapp connects to your phone to sync messages. To reduce data usage, connect to your phone to Wi-Fi.</p>
                <span>
                    <span class="material-icons">
                        computer
                    </span>
                    Whatsapp is available for Windows.<a href="#">Get it here.</a>
                </span>
            </div>
        </React.Fragment>
    );
}



export default Emptypage;