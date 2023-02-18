import React from 'react'

import './Home.css'
import LogoImage from "../../assets/logo/HapyHourLogo_Roger_brown.png";
import DividerLine from "../../assets/icons/dividerline.svg"


import {useNavigate} from 'react-router-dom';
import RandomisedCocktail from "../../components/RandomisedCocktail";


function Home() {

    const navigate = useNavigate();

    return (
        <>

                <header>
                    <article className="header-title">
                        <img className="logo-image" src={LogoImage} alt="the happy hour logo"/>
                        <h1 className="title-homepage"> Welcome to your HappyHour!</h1>
                        <img src={DividerLine} className="divider-line" alt="beige colored divider line"/>
                    </article>

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
                </header>
        </>

    );
}

export default Home;