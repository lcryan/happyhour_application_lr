import React from 'react';
import Bartender from "../../components/Bartender";
import './Mixologist.css'
import BartenderPng from '../../assets/icons/Bartender_black.png'

function Mixologist(props) {
    return (
        <div>

            <section className="header-mixologist">
<p>TEST</p>
                <p>TEST FOR PUSH</p>
                <h1>Hello, I am your Mixologist!</h1>
                <img src={BartenderPng} className="bartender-icon"/>
                <h2>Let me assist you and help you making better choices.</h2>
                <h3>Just a couple of questions first!</h3>
            </section>

            <section className="bartender-select-buttons">
                <Bartender/>
            </section>
        </div>
    );
}

export default Mixologist;