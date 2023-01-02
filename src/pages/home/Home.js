import React from 'react';
import Navigation from "../../components/Navigation";

import './Home.css'
import LogoImage from "../../assets/logo/TestLogo.png";
import Blue from "../../assets/BlueHawaiiCocktail.png";


function Home() {
    return (
        <>

            <Navigation/>
            <header className="homepage-header">
                <img className="logo-image" src={LogoImage} alt="logo-image"/>
                <h1 className="header-homepage"> Welcome to your HappyHour.</h1>
            </header>
                <section className="overview-section">
                    <article className="overview-article">
                        <p>Blue Hawaii</p>
                        <img className="day-cocktail-image" src={Blue}></img>
                        <button className="randomizer-button" type='button'>Randomizer</button>

                    </article>
                </section>


        </>
    );
}

export default Home;