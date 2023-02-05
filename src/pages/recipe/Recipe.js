import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Recipe.css";


function Recipe() {

    const {id} = useParams();
    const [recipes, setRecipes] = useState([]);
    const ids = id.split(",");

    useEffect(() => {

        console.log(id)
        console.log(ids)
        const controller = new AbortController();

        async function getRecipes() {
            try {
                const newRecipes = []
                for (let i = 0; i < ids.length; i++) {
                    console.log(ids[i])
                    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ids[i]}`, {})
                    // TODO check response is correct
                    newRecipes.push(response.data.drinks[0])
                    console.log(newRecipes)
                }
                setRecipes(newRecipes)

            } catch (e) {
                console.error(e);
            }

        }

        void getRecipes()

        return function cleanup() {
            controller.abort();
        }
    }, [ids])


    return (
        <>{
            recipes.map((cocktail) => {
                return (
                    <article className="outer-container-recipe">
                        <article className="inner-container-cocktail-info-recipe" key={cocktail.idDrink}>
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
        }</>


    )
}


export default Recipe;