import React, {useEffect, useState} from 'react';
import axios from "axios"
import './Latest.css'

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
                                <article className="latest-cocktail" key={cocktail.idDrink}>
                                    <img src={cocktail.strDrinkThumb} alt="foto of according cocktail"
                                         className="cocktail-foto"/>
                                    <p>{cocktail.strDrink}</p>
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