import React from 'react';
import './Navigation.css'


function Navigation() {
    return (

        <>
<nav className="navbar">
    <ul className="list-searchbar">
        <li>Home</li>
        <li>Favourites</li>
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