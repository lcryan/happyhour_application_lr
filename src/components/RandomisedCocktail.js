import React, {useCallback, useEffect, useState} from 'react';
import OneCocktailCard from "./OneCocktailCard";
import axios from "axios";

function RandomisedCocktail(props) {
    const [randomCocktail, setRandomCocktail] = useState([]);

    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;

    const fetchCocktailHandler = useCallback(() => {
            setRandomCocktail({
            strDrink: "loading",
            idDrink: "",
            strDrinkThumb: "https://via.placeholder.com/150"
        })

        axios.get(apiUrl).then(response => {
            console.log(response.data)
            setRandomCocktail(response.data.drinks[0])
        }).catch(e => console.log(e))

    }, []);


    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);


    return (<>
        <OneCocktailCard
            strDrink={randomCocktail.strDrink}
            keyStr={randomCocktail.idDrink}
            imgStr={randomCocktail.strDrinkThumb}
        />
        <button className="randomizer-button" onClick={() => {
            fetchCocktailHandler()
        }}
                type='button'>Randomizer
        </button>
    </>)

}

export default RandomisedCocktail;