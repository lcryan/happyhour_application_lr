import React, {useEffect, useState} from 'react';
import axios from "axios"
import './Latest.css'
import {Link} from "react-router-dom";

function Latest() {

    const [data, setData] = useState([])


    useEffect(() => {

        async function getAllCocktails() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`);
                console.log(response)
                setData(response.data.drinks)
            } catch (e) {
                console.error(e);
            }
        }

        void getAllCocktails();
    }, [])

    return (
        <>
            <section className="outer-content-container-latest-cocktails">
                <div className="inner-content-container-latest-cocktails">
                    <h1 className="title-latest"> Our latest Cocktails are: </h1>
                    <div className="latest-cocktails-container">
                        {data.map((cocktail) => {
                            return (
                                <article className="cocktail-data" key={cocktail.idDrink}>
                                    <img className="cocktail-foto-latest-link" alt="foto of cocktail" src={cocktail.strDrinkThumb}/>
                                    <Link className="link-to-subLatest" to="/LatestOne">{cocktail.strDrink}</Link>
                                </article>

                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Latest;