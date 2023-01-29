import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL} from "../../constants";
import {Link, NavLink} from "react-router-dom";
import OneCocktailCard from "../OneCocktailCard";

function QuestionnaireResults(props) {
    const {filters} = props

    const [result, setResult] = useState([]);


    useEffect(() => {

        async function fetchCocktails() {

            const filterQuery = `${filters.join('&')}`
            console.log(filterQuery)
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterQuery}`)
            //
            console.log(response)
            setResult(response.data.drinks.slice(0,9))
        }

        try {
            fetchCocktails()
        } catch (error) {
            console.log(error)
        }
    }, [])

    if (!result) {
        return "No cocktails found"
    }

    return (result.map((cocktail) => {
        return (
            <>
                <article className="cocktail-details" key={cocktail.idDrink}>
                    <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                        <OneCocktailCard
                            keyStr={cocktail.idDrink}
                            imgStr={cocktail.strDrinkThumb}
                            strDrink={cocktail.strDrink}
                        />
                    </Link>
                </article>

            </>
        )
    }))
}

export default QuestionnaireResults;