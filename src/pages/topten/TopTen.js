import React, {useEffect, useState} from 'react';
import OneCocktailCard from "../../components/OneCocktailCard";
import axios from "axios"
import './TopTen.css'
import {Link} from "react-router-dom";


function TopTen() {

    const [topTen, setTopTen] = useState([]);

    useEffect(() => {

        async function getTopTen() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`);
                /* console.log(response)*/
                setTopTen(response.data.drinks)

            } catch (e) {
                console.error(e);
            }
        }

        void getTopTen();
    }, [])


    return (
        <>
            <section className="outer-content-container-topTen-cocktails">
                <div className="inner-content-container-topTen-cocktails">
                    <h1 className="title-top-ten"> Our User's Most Popular cocktails: </h1>
                    <div className="top-ten-cocktails-container">
                        {topTen.map((cocktail) => {

                            return (
                                <article className="cocktail-details" key={cocktail.idDrink}>
                                    <Link to={`/topTenOne/${cocktail.idDrink}`}>
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
                </div>
            </section>
        </>
    );
}

export default TopTen;