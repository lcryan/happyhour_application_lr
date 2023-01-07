import React, {useCallback, useEffect, useState} from 'react'
import OneCocktailCard from "../../components/OneCocktailCard";
import './Home.css'
import LogoImage from "../../assets/logo/TestLogo.png";


import {useNavigate} from 'react-router-dom';
import axios from "axios";


function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [randomCocktail, setRandomCocktail] = useState([]);

    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios.get(apiUrl).then(response => {
            console.log(response.data)
            setRandomCocktail(response.data.drinks)
        }).catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, []);


    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    if (loading) return <h2>"Fetching an awesome cocktail for you..."</h2>

    return (
        <>
            <header className="homepage-header">
                <img className="logo-image" src={LogoImage} alt="the happy hour logo"/>
                <h1 className="header-homepage"> Welcome to your HappyHour.</h1>
            </header>

            <section className="overview-section">
                <article className="random-cocktail-article">
                    <div className="one-random-cocktail">
                        {randomCocktail.map((cocktail) => {
                                return (
                                    <OneCocktailCard
                                        strDrink={cocktail.strDrink}
                                        keyStr={cocktail.idDrink}
                                        imgStr={cocktail.strDrinkThumb}
                                    />
                                )
                            }
                        )}

                    </div>
                    <button className="randomizer-button" onClick={() => {
                        fetchCocktailHandler()
                    }}
                            type='button'>Randomizer
                    </button>
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