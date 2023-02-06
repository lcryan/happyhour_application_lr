import React from 'react';
import './Mixologist.css'

import Questionnaire from "../../components/Questionnaire/Questionnaire";
import Bartender from "../../assets/icons/bartender.svg";
import DividerLine from "../../assets/icons/dividerline.svg";

function Mixologist(props) {
    return (
        <>
            <article className="header-mixologist">
                <h1>Hello, I am your Mixologist!</h1>
                <img src={Bartender} className="bartender-icon" alt="bartender with shaker color beige"/>
                <h2>Let me assist you and help you making better choices.</h2>
                <img src={DividerLine} className="mixologist-divider-line" alt="beige colored element divider"/>
            </article>
            <Questionnaire/>
        </>

    );
}

export default Mixologist;