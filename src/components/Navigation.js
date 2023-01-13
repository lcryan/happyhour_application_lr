import React from 'react';
import {useContext} from "react";
import './Navigation.css'
import {NavLink} from "react-router-dom";
/*import {AuthContext} from "../context/AuthContext";*/


function Navigation() {

/*    const {auth, logout} = useContext(AuthContext);

    function handleLogout() {
        logout()
    }*/

    return (
        <>
            <nav className="navbar">
                <ul className="list-searchbar">
                    <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Home</NavLink></li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li><NavLink to ="/myAccount" className={({isActive})=> isActive ? "link--active" : "link" }>My Account</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                </ul>

       <button type="logout-button">Logout</button> {/* still has to be styled */}

                <input className="search-bar" placeholder="Search your cocktail here">
                </input>
            </nav>
        </>
    );
}

export default Navigation;