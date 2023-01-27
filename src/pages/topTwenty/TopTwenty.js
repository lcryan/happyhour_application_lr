import React, {useEffect, useState} from 'react';
import OneCocktailCard from "../../components/OneCocktailCard";
import axios from "axios"
import './TopTwenty.css'
import {Link} from "react-router-dom";


function TopTwenty() {

    const [topTwenty, setTopTwenty] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        async function getTopTwenty() {

            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`,
                    {signal: controller.signal});
                /* console.log(response)*/
                setTopTwenty(response.data.drinks)

            } catch (e) {
                console.error(e);
                setError(true); //TODO ask Scott how to implement more defensive code here.
            }
        }

        setLoading(false); //TODO ask Scott where to set up the loading...

        void getTopTwenty();
        return function cleanup() {
            controller.abort()
        }
    }, [])


    return (
        <>
            <section className="outer-container-top-twenty">
                <h1 className="title-top-twenty"> Our User's Most Popular cocktails: </h1>
                <div className="inner-container-top-twenty">
                    {topTwenty.map((cocktail) => {
                        return (
                            <article className="cocktail-details" key={cocktail.idDrink}>
                                <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                                    <OneCocktailCard
                                        keyStr={cocktail.idDrink}
                                        imgStr={cocktail.strDrinkThumb}
                                        strDrink={cocktail.strDrink}
                                    />
                                </Link>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default TopTwenty;