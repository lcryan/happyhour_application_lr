import React, {useCallback, useEffect, useState} from 'react'
import OneCocktailCard from "../../components/OneCocktailCard";
import './Home.css'
import LogoImage from "../../assets/logo/TestLogo.png";

import  {myCocktail} from "../../helpers";

import {useNavigate} from 'react-router-dom';
import RandomisedCocktail from "../../components/RandomisedCocktail";


function Home() {


    const navigate = useNavigate();

    return (
        <>
            <header className="homepage-header">
                <img className="logo-image" src={LogoImage} alt="the happy hour logo"/>
                <h1 className="header-homepage"> Welcome to your HappyHour.</h1>
            </header>

            <section className="overview-section">
                <article className="random-cocktail-article">
                    <div className="one-random-cocktail">
                        <RandomisedCocktail />
                    </div>
                </article>
                <article className="menu-buttons">
                    <p className="help-text">Choose to your liking from below...</p>
                    <button className="latest-button" onClick={() => navigate("/latest")}>Latest Cocktails</button>
                    <button className="top-ten-button" onClick={() => navigate("/topten")}>Our User's Top 20</button>
                    <button className="mixologist-button" onClick={() => navigate("/mixologist")}> Go to our
                        MIXOLOGIST
                    </button>
                </article>
            </section>
        </>
    );
}

export default Home;