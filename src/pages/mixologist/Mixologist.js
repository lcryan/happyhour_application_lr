import React from 'react';
import './Mixologist.css'

import Questionnaire from "../../components/Questionnaire/Questionnaire";

function Mixologist(props) {
    return (
        <>
            <article className="header-mixologist">
                <h1>Hello, I am your Mixologist!</h1>
                <h2>Let me assist you and help you making better choices.</h2>
                <h3>Just a couple of questions first!</h3>
            </article>
            <Questionnaire/>
        </>

    );
}

export default Mixologist;