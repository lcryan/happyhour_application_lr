import "./SingleCocktail.css";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import React from "react";
import AddToFavourites from "../../components/AddToFavourites";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";


function SingleCocktail() {

    const [oneCocktail, setOneCocktail] = useState({});
    const [loading, setLoading] = useState(false);
    //TODO set error and errorMessage ?

    const {id} = useParams();


    useEffect(() => {

        const controller = new AbortController();

        async function getOneCocktail() {

            setLoading(true);

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
            } catch (error) {
                console.log(error)
            }
        }

        void getOneCocktail();

        return function cleanup() {
            controller.abort()
        }

    }, [id]);

    return (

        <>
            {loading ? (<h3 className="loading-message-single">Loading...</h3>) : (
                <section className="outer-container-single-cocktail">
                    <article className="container-content-single-cocktail">
                        <>
                            <div className="image-container">
                                <p className="hover-text">Hover to add to/remove from favs</p>
                                <img className="foto-singleCocktail" alt="foto of single-cocktail"
                                     src={oneCocktail.strDrinkThumb}/>

                                <AddToFavourites cocktail={oneCocktail}/>

                            </div>

                            <div className="content-single-cocktail">
                                <h3 className="single-cocktail-title">{oneCocktail.strDrink} </h3>
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
                                <div className="back-arrow-single">
                                    <Link to="/"><FontAwesomeIcon className="chevron-arrow-left"
                                                                  icon={faChevronCircleLeft}/></Link>
                                </div>
                            </div>
                        </>
                    </article>
                </section>
            )}

        </>

    );
}

export default SingleCocktail;
