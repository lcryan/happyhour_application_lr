import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DB_SEARCH_INGREDIENT_URL} from "../constants";

function SearchIngredientBar() {

    const [ingredient, setIngredient] = useState("");
    const [nameIngredient, setNameIngredient] = useState([])


    useEffect(() => {
        async function getIngredients() {

            try {
                const response = await axios.get(`${DB_SEARCH_INGREDIENT_URL}${ingredient}`)
                console.log(response.data)
                setIngredient(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (ingredient) {
                setIngredient(ingredient);
            } else {
                console.log("Sorry, we couldn't find the ingredient you were looking for. Please try again.")
            }

        }

        void getIngredients()
    }, [ingredient])

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    };

    const recentInput = () => {
        setIngredient("");
    }

    return (
        <main>
            <article className="ingredient-search-outer">
                <div className="ingredient-search-inner">
                    <input type="text"
                           placeholder="Search cocktail by ingredient"
                           value={ingredient}
                           onChange={handleChange}
                           className="ingredient-bar"
                    />
                    <div className="ingredient-container">
                        <ul className="ingredient-suggestion">
                            {ingredient && nameIngredient && nameIngredient.map((element)=>(
                                <li className="list-ingredient-sug">
                                    <></>





                                </li>
                            ))}



                        </ul>



                    </div>


                </div>


            </article>


        </main>
    );
}

export default SearchIngredientBar;
