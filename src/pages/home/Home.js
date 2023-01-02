import React from 'react';
import Navigation from "../../components/Navigation";
import LogoImage from "../../assets/logo/TestLogo.png";
import './Home.css'

function Home(props) {
    return (
        <>

            <Navigation/>
            <header className="homepage-header">
                <h1 className="header-homepage"> Welcome to your HappyHour</h1>
                <img className="logo-image" src={LogoImage}></img>
                <h2>Let's drink to that.</h2>
            </header>
        </>
    );
}

export default Home;