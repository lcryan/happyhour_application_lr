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
                <article className="random-cocktail-article">
                    <p className="cocktail-name">Blue Hawaii</p>
                    <img className="day-cocktail-image" src={Blue}/>
                    <button className="randomizer-button" type='button'>Randomizer</button>
                </article>
                <article className="menu-buttons">
                    <button className="latest">Latest Cocktails</button>
                    <button className="top-ten">Our Top Ten</button>
                    <p>Need more help?</p>
                    <button className=""> Go to our MIXOLOGIST</button>
                </article>
            </section>
        </>
    );
}

export default Home;