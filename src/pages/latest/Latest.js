import React, {useEffect, useState} from 'react';
import axios from "axios"
import './Latest.css'

import OneCocktailCard from "../../components/OneCocktailCard";
import {Link} from "react-router-dom";


function Latest() {

    const [data, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController();

        async function getAllCocktails() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`, {
                    signal: controller.signal
                });
                console.log(response)
                if (response) {
                    setData(response.data.drinks || [])
                } else {
                    console.log("no data found")
                }
                setData(response.data.drinks)
            } catch (e) {
                console.error(e);
            }
        }

        void getAllCocktails();
        return function cleanup() {
            controller.abort();
        }
    }, [])

    const getDrinks = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (<>
                <p>nothing found</p>
            </>)
        } else {
            return data.map((cocktail) => {
                return (
                    <article className="cocktail-info" key={cocktail.idDrink}>
                        <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                            <OneCocktailCard
                                keyStr={cocktail.idDrink}
                                imgStr={cocktail.strDrinkThumb}
                                strDrink={cocktail.strDrink}
                            />
                        </Link>
                    </article>

                )
            })
        }
    }

    return (
        <>
            <section className="outer-content-container-latest-cocktails">
                <div className="inner-content-container-latest-cocktails">
                    <h1 className="title-latest"> Our latest Cocktails are: </h1>
                    <div className="latest-cocktails-container">
                        {getDrinks(data)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Latest;