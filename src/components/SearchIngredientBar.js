import React, {useEffect, useState} from "react";
import axios from "axios";
import {DB_SEARCH_INGREDIENT_URL} from "../constants";
import "./SearchIngredientBar.css";
import OneCocktailCard from "./OneCocktailCard";
import {Link} from "react-router-dom";

function SearchIngredientBar() {

    const [ingredient, setIngredient] = useState("");
    const [nameIngredient, setNameIngredient] = useState([])


    useEffect(() => {

        const controller = new AbortController();

        async function getIngredients() {

            try {
                const response = await axios.get(`${DB_SEARCH_INGREDIENT_URL}${ingredient}`,
                    {signal: controller.signal})
                console.log(response.data)
                if (Array.isArray(response.data.drinks)) {
                    setNameIngredient(response.data.drinks)
                }
            } catch (error) {
                console.log(error)
            }
            if (ingredient) {
                setIngredient(ingredient);
            } else {
                console.log("Sorry, we couldn't find the ingredient you were looking for. Please try again.")
            }

        }

        void getIngredients();
        return function cleanup() {
            controller.abort();
        }
    }, [ingredient])

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    };

    return (
        <>
            <article className="ingredient-search-bar">
                <input type="text"
                       placeholder="Search cocktail by ingredient"
                       value={ingredient}
                       onChange={handleChange}
                       className="search-bar-ingredient"
                />
            </article>

            <article className="results-outer-box">
                <div className="ingredient-container">
                    {ingredient && nameIngredient && nameIngredient.map((element) => (
                        <Link to={`/singleCocktail/${element.idDrink}`}>
                            <OneCocktailCard cocktail={element}
                            />
                        </Link>
                    ))}
                </div>
            </article>

        </>
    );
}

export default SearchIngredientBar;

