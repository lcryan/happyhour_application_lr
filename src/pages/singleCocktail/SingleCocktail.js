import './SingleCocktail.css';
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import BackArrow from "../../assets/icons/BackArrow2.svg";
import AddToFavourites from "../../components/AddToFavourites";


function SingleCocktail() {

    const {
        addToFavourites,
        removeFromFavourites
    } = useContext(GlobalContext)

    const [oneCocktail, setOneCocktail] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();


    useEffect(() => {

        const controller = new AbortController();

        async function getOneCocktail() {

            try {

                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                    , {signal: controller.signal})

                if (response.data.drinks.length === 1) {
                    setOneCocktail(response.data.drinks[0])
                    setLoading(false);
                } else {
                    setOneCocktail(null);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e)
            }

        }

        void getOneCocktail();

        return function cleanup() {
            controller.abort()
        }

    }, [id]);

    if (loading) {
        return "Getting cocktail..."
    }
    if (!oneCocktail) {
        return <h3>No cocktail to display</h3>
    }

    return (

        <>
            <section className="outer-container-single-cocktail">
                <article className="container-content-single-cocktail">
                    <>
                        <div className="image-container">
                            <img className="foto-singleCocktail" alt="foto of single-cocktail"
                                 src={oneCocktail.strDrinkThumb}/>
                            <button className="overlay" onClick={() => addToFavourites(oneCocktail)}>
                                <AddToFavourites/>
                            </button>
                        </div>

                        <div className="content-single-cocktail">
                            <h3 className="singleCocktail-cocktail-title">Cocktail Name: {oneCocktail.strDrink} </h3>
                            <ul className="ingredients-list">
                                Ingredients:
                                <li className="ingredients"> {oneCocktail.strIngredient1}</li>
                                <li className="ingredients"> {oneCocktail.strIngredient2} </li>
                                <li className="ingredients"> {oneCocktail.strIngredient3} </li>
                                <li className="ingredients"> {oneCocktail.strIngredient4} </li>
                                <li className="ingredients">{oneCocktail.strIngredient5}</li>
                                <li className="ingredients">{oneCocktail.strIngredient6}</li>
                                <li className="ingredients">{oneCocktail.strIngredient7}</li>
                                <li className="ingredients">{oneCocktail.strIngredient8}</li>
                                <li className="ingredients">{oneCocktail.strIngredient9}</li>
                                <li className="ingredients">{oneCocktail.strIngredient10}</li>
                            </ul>
                        </div>
                    </>

                </article>

            </section>
            <div className="back-arrow">
                <Link to="/"><img src={BackArrow} className="back-arrow" alt="grey arrow directed back"/></Link>
            </div>
        </>
    );
}

export default SingleCocktail;
