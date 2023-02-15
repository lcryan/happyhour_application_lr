import React, {useCallback, useEffect, useState} from 'react';
import OneCocktailCard from "./OneCocktailCard";
import axios from "axios";
import {Link} from "react-router-dom";
import './RandomisedCocktail.css'
import Spinner from "./Spinner";
import "./Spinner.css"

function RandomisedCocktail() {

    const [randomCocktail, setRandomCocktail] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true) //set loading to true when fetching my data
        setRandomCocktail(null)

        axios.get(apiUrl).then(response => {
            console.log(response.data)
            setRandomCocktail(response.data.drinks[0])
        }).catch(e => console.log(e))
            .finally(() => setLoading(false)) //setLoading to false when there is an actual response

    }, []);


    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);


    return (<>
        {loading ? ( // show the spinner when loading is true
            <Spinner/>
        ) : (
            <article className="cocktail-details" key={randomCocktail.idDrink}>
                <Link to={`/singleCocktail/${randomCocktail.idDrink}`}>
                    <OneCocktailCard cocktail={randomCocktail}
                    />
                </Link>
            </article>)}
        <button className="randomizer-button" onClick={() => {
            fetchCocktailHandler()
        }}
                type='button'>Randomizer
        </button>
    </>)

}

export default RandomisedCocktail;