import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Ups...sorry, page not found. Go back home here.</h1>

            <article>
                <Link to="/">Go back Home</Link>
            </article>

        </>
    );
}

export default NotFound;