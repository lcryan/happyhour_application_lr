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
                <ul className="list-navbar">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "link--active" : "link"}>Home</NavLink>
                    </li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li><NavLink to="/myAccount" className={({isActive}) => isActive ? "link--active" : "link"}>My
                        Account</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                </ul>
                <ul className="navbar-elements-right">
                    <li>
                        <input className="search-bar" placeholder="Search your cocktail here">
                        </input>
                    </li>
                    <li>
                        <button className="logout-button" type="button">Logout</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;