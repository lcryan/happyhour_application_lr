import React from 'react';
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import './Navigation.css'
import {NavLink, Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import './SearchBar.css'

import {AuthContext} from "../context/AuthContext";


function Navigation() {

    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleAuthClick() {
        isAuth ? logout() : navigate("/login")
    }

    return (
        <>
            <nav className="navbar">
                <ul className="list-navbar">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "link--active" : "link"}>Home</NavLink>
                    </li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li><NavLink to="/myAccount" className={({isActive}) => isActive ? "link--active" : "link"}>My
                        Account</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <ul className="navbar-elements-right">
                    <li>
                        <SearchBar/>
                    </li>
                    <li>
                        <button className="logout-button" type="button"
                                onClick={handleAuthClick}>{isAuth ? "Logout" : "Login"}</button>
                        <button className="sign-up-button"
                                type="button">
                            <Link to="/registration">Sign Up</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;