import React, {useCallback, useEffect, useState} from 'react';
import OneCocktailCard from "./OneCocktailCard";
import axios from "axios";
import {Link} from "react-router-dom";
import './RandomisedCocktail.css'
import Spinner from "./Spinner";
import "./Spinner.css";
import {DB_RANDOM_COCKTAIL_URL} from "../constants";

function RandomisedCocktail() {

    const [randomCocktail, setRandomCocktail] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiUrl = `${DB_RANDOM_COCKTAIL_URL}`;

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);
        setRandomCocktail(null);

        axios.get(apiUrl).then(response => {
            console.log(response.data)
            setRandomCocktail(response.data.drinks[0])
        }).catch(e => console.log(e))
            .finally(() => setLoading(false));

    }, []);


    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);


    return (<>
        {loading ? (
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