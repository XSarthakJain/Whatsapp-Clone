import React from 'react';
import Profileinfocontaintheader from './Profileinfocontaintheader.jsx';
import Contactinfodpsection from './Contactinfodpsection.jsx';
import './css/Profileinfocontaint.css';

let Profileinfocontaint = ()=>{
    return (
        <React.Fragment>
            <section className="ProfileinfocontaintOuter">
                <Profileinfocontaintheader name="ContactInfo" />
                <div class="ContactinfodpsectionOuter">
                <Contactinfodpsection/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Profileinfocontaint;