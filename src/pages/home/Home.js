import React from 'react'

import './Home.css'
import LogoImage from "../../assets/logo/Logo HappyHour App_lightgrey.svg";

import {useNavigate} from 'react-router-dom';
import RandomisedCocktail from "../../components/RandomisedCocktail";


function Home() {

    const navigate = useNavigate();

    return (
        <>
            <div className="outer-container-hompage">

                <article className="homepage-title">
                    <img className="logo-image" src={LogoImage} alt="the happy hour logo"/>
                    <h1 className="header-homepage"> Welcome to your HappyHour!</h1>
                </article>

                <div className="inner-container-homepage">
                    <article className="overview-container">
                        <article className="random-cocktail-article">
                            <div className="one-random-cocktail">
                                <RandomisedCocktail/>
                            </div>
                        </article>
                        <article className="menu-buttons">
                            <p className="help-text">Choose to your liking from below...</p>
                            <button className="latest-button" onClick={() => navigate("/latest")}>Latest Cocktails
                            </button>
                            <button className="top-ten-button" onClick={() => navigate("/topTwenty")}>Our User's Top 20
                            </button>
                            <button className="mixologist-button" onClick={() => navigate("/mixologist")}> Go to our
                                MIXOLOGIST
                            </button>
                        </article>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home;