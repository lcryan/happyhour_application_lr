import React from 'react';
import './Navigation.css'
import LogoImage from "../assets/logo/TestLogo.png";

function Navigation() {
    return (

        <>
<nav className="navbar">
    <ul className="list-searchbar">
        <li>Home</li>
        <li>Favorites</li>
        <li>My Account</li>
        <li>Help</li>
    </ul>
    <input className="search-bar" placeholder="Search your cocktail here">
    </input>
</nav>


        </>
    );
}

export default Navigation;