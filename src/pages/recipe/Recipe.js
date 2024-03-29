import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Recipe.css";


function Recipe() {

    const {id} = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const ids = id.split(",");

    useEffect(() => {

        console.log(id)
        console.log(ids)
        const controller = new AbortController();

        async function getRecipes() {
            try {
                const newRecipes = [];
                setLoading(true)
                setError(false);
                for (let i = 0; i < ids.length; i++) {
                    console.log(ids[i])
                    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${ids[i]}`, {})
                    newRecipes.push(response.data.drinks[0])
                    console.log(newRecipes)
                }
                setRecipes(newRecipes)

                if (!newRecipes || newRecipes.length === 0) {
                    setError(true)
                    setErrorMessage("No recipes found")
                }
            } catch (e) {
                console.error(e);
                setError(true);

            } finally {
                setLoading(false);
                setError(false);
            }
        }

        void getRecipes()

        return function cleanup() {
            controller.abort();
        }
    }, [id])

    return (
        <>{loading ? (<p className="loading-recipe">Loading...</p>) : error ?
            <p className="error-message-recipe">{errorMessage}</p> : (
                recipes.map((cocktail) => {
                    return (
                        <article className="outer-container-recipe" key={cocktail.idDrink}>
                            <article className="inner-container-cocktail-info-recipe">
                                <div className="image-cocktail-recipe">
                                    <img src={cocktail.strDrinkThumb} className="recipe-image"
                                         alt="foto of chosen cocktail"/>
                                </div>
                                <div className="container-name-and-ingredients">
                                    <div className="recipe-cocktail-name">
                                        <h2>{cocktail.strDrink}</h2>
                                    </div>
                                    <ul className="list-of-ingredients-recipe">
                                        <li>{cocktail.strIngredient1} {cocktail.strMeasure1}</li>
                                        <li>{cocktail.strIngredient2} {cocktail.strMeasure2}</li>
                                        <li>{cocktail.strIngredient3} {cocktail.strMeasure3}</li>
                                        <li>{cocktail.strIngredient4} {cocktail.strMeasure4}</li>
                                        <li>{cocktail.strIngredient5} {cocktail.strMeasure5}</li>
                                        <li>{cocktail.strIngredient6} {cocktail.strMeasure6}</li>
                                        <li>{cocktail.strIngredient7} {cocktail.strMeasure7}</li>
                                        <li>{cocktail.strIngredient8} {cocktail.strMeasure8}</li>
                                        <li>{cocktail.strIngredient9} {cocktail.strMeasure9}</li>
                                        <li>{cocktail.strIngredient10} {cocktail.strMeasure10}</li>
                                    </ul>
                                </div>
                                <div className="container-text">
                                    <p className="recipe-instructions">{cocktail.strInstructions}</p>
                                </div>
                            </article>
                        </article>
                    )
                })
            )}
        </>
    )
}


export default Recipe;