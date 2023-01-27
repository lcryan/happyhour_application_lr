import './SingleCocktail.css';
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import React from 'react';
import Button from "../../components/Button";
import BackArrow from "../../assets/icons/BackArrow2.svg"


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

            <article className="single-cocktail-title">
                <h1>Are you ready for this ?</h1>
                <h3>It looks delicious! Good choice!</h3>
            </article>

            <section className="outer-container-single-cocktail">
                <article className="container-single-cocktail">
                    {Object.keys(oneCocktail).length > 0 && <>
                        <div className="image-single-cocktail">
                            <img className="foto-singleCocktail" alt="foto of single-cocktail"
                                 src={oneCocktail[0].strDrinkThumb}/>
                        </div>
                        <div className="content-single-cocktail">
                            <h3 className="singleCocktail-cocktail-title">Cocktail Name: {oneCocktail[0].strDrink} </h3>
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
                            <Button type="button" className="button-single-cocktail">Add to favourites</Button>
                        </div>
                    </>
                    }

                </article>

            </section>
            <div className="back-arrow">
                <Link to="/"><img src={BackArrow} className="back-arrow" alt="grey arrow directed back"/></Link>
            </div>
        </>
    );
}

export default SingleCocktail;
