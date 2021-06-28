import React from 'react';
import Profileinfocontaintheader from './Profileinfocontaintheader.jsx';
import Contactinfodpsection from './Contactinfodpsection.jsx';
import Contactinfomediasection from './Contactinfomediasection.jsx';
import './css/Profileinfocontaint.css';

let Profileinfocontaint = ()=>{
    return (
        <React.Fragment>
            <section className="ProfileinfocontaintOuter">
                <Profileinfocontaintheader name="ContactInfo" />

                <div className="ProfileinfocontaintInner">
                <div class="ContactinfodpsectionOuter">
                <Contactinfodpsection/>
                </div>
                <div className="ContactinfomediasectionOuter">
                <Contactinfomediasection/>
                </div>
               
                
                </div>
            </section>
        </React.Fragment>
    );
}

export default Profileinfocontaint;