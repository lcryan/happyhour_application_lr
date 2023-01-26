import React from 'react';
import Bartender from "../../components/Bartender";
import './Mixologist.css'

function Mixologist(props) {
    return (
        <div>
            <section className="header-mixologist">
                <h1>Hello, I am your Mixologist!</h1>
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