import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


function Latest() {

    const [cocktails, setCocktails] = useState([])

    useEffect(() => {

        async function getCocktailData() {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/recent.php');
                /*console.log(response.data.drinks);*/
                /*setCocktails(response.data.drinks)*/

            } catch (e) {
                console.error(e);
            }
        }

        void getCocktailData();
    }, [])


    return (
        <>
            <section className="outer-content-container-latest-cocktails">
                <div className="inner-content-container-latest-cocktails">
                    <h2>Latest Cocktails</h2>
                    {/*<div className="latest-cocktails-article-container">
                        {cocktails.map((cocktail) => {
                            return (

                                <h3>{cocktail.data.drinks.dateModified}</h3>


                            )
                        })}
                    </div>*/}

                </div>
            </section>
        </>
    );
}

export default Latest;