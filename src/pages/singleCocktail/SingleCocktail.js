import './SingleCocktail.css';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import React from 'react';


function SingleCocktail() {

    const [oneCocktail, setOneCocktail] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {

        async function getOneCocktail() {
            try {

                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                console.log(response.data)
                console.log(id)
                setOneCocktail(response.data.drinks)

                if (oneCocktail) {
                    setOneCocktail(response.data.drinks)
                    setLoading(false);
                } else {
                    setOneCocktail(null);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e)
            }

        }

        void getOneCocktail()

    }, [id]);

    if (loading) {
        return "Getting cocktail..."
    }
    if (!oneCocktail) {
        return <h3>No cocktail to display</h3>
    }

    return (

        <>
            <article className="outer-container-singleCocktail">
                <div className="inner-container-singleCocktail">
                    {Object.keys(oneCocktail).length > 0 && <>
                        <h3 className="singleCocktail-cocktail-title">Cocktail
                            Name: {oneCocktail[0].strDrink} </h3>
                        <img className="foto-singleCocktail" alt="foto of single-cocktail"
                             src={oneCocktail[0].strDrinkThumb}/>
                        <ul className="ingredients-list">
                            Ingredients:
                            <li className="ingredients"> {oneCocktail[0].strIngredient1}</li>
                            <li className="ingredients"> {oneCocktail[0].strIngredient2} </li>
                            <li className="ingredients"> {oneCocktail[0].strIngredient3} </li>
                            <li className="ingredients"> {oneCocktail[0].strIngredient4} </li>
                            <li className="ingredients">{oneCocktail[0].strIngredient5}</li>
                            <li className="ingredients">{oneCocktail[0].strIngredient6}</li>
                            <li className="ingredients">{oneCocktail[0].strIngredient7}</li>
                            <li className="ingredients">{oneCocktail[0].strIngredient8}</li>
                            <li className="ingredients">{oneCocktail[0].strIngredient9}</li>
                            <li className="ingredients">{oneCocktail[0].strIngredient10}</li>
                        </ul>
                        <button type="button"> Add to my favourites.</button>
                    </>
                    }
                </div>
            </article>
        </>
    );
}

export default SingleCocktail;
