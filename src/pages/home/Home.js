import React from 'react';


import './Home.css'
import LogoImage from "../../assets/logo/TestLogo.png";
import Blue from "../../assets/BlueHawaiiCocktail.png";
import {useNavigate} from 'react-router-dom';


function Home() {

    const navigate = useNavigate()

    return (

        <>
            <header className="homepage-header">
                <img className="logo-image" src={LogoImage} alt="image of tha happy hour logo"/>
                <h1 className="header-homepage"> Welcome to your HappyHour.</h1>
            </header>
            <section className="overview-section">
                <article className="random-cocktail-article">
                    <p className="cocktail-name">Blue Hawaii</p>
                    <img className="day-cocktail-image" alt="image of blue hawaii cocktail" src={Blue}/>
                    <button className="randomizer-button" onClick={() => navigate("/randomizer")}
                            type='button'>Randomizer
                    </button>
                </article>
                <article className="menu-buttons">
                    <button className="latest-button" onClick={() => navigate("/latest")}>Latest Cocktails</button>
                    <button className="top-ten-button" onClick={() => navigate("/topten")}>Our Top Ten</button>
                    <p>Need more help?</p>
                    <button className="mixologist-button" onClick={() => navigate("/mixologist")}> Go to our
                        MIXOLOGIST
                    </button>
                </article>
            </section>
        </>
    );
}

export default Home;