import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css"

function NotFound() {
    return (
        <>
            <div className="back-message">
                <h1>Ups...sorry, page not found. Go back home <Link to="/">here.</Link></h1>
            </div>
        </>
    );
}

export default NotFound;