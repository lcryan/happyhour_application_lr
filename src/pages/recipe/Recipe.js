import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


function Recipe() {

    const {id} = useParams();
    const [recipes, setRecipes] = useState([]);
    const ids = id.split(',');

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
    }, [])


    return (
        <>{
            recipes.map((cocktail) => {
                return (
                    <article className="cocktail-info" key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <p className="test-recipe-text">{cocktail.strInstructions}</p>
                    </article>

                )
            })
        }</>


    )
}


export default Recipe;