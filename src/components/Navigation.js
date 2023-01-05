import React from 'react';
import './Navigation.css'
import {Link, NavLink} from "react-router-dom";


function Navigation() {
    return (
        <>
            <nav className="navbar">
                <ul className="list-searchbar">
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li><NavLink to="/myAccount">My Account</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                </ul>
                <input className="search-bar" placeholder="Search your cocktail here">
                </input>
            </nav>
        </>
    );
}

export default Navigation;