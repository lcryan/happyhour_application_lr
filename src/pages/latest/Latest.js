import React, {useEffect, useState} from 'react';
import axios from "axios";
import OneCocktailCard from "../../components/OneCocktailCard";


function Latest() {

    const [cocktailArray, setCocktailArray] = useState([])

    useEffect(() => {

        async function getAllCocktails() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`);
                /*console.log(response);*/
                setCocktailArray(response.data)

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
                    <h2>Latest Cocktails</h2>
                    <div className="latest-cocktails-article-container">
                        {cocktailArray.map((cocktail) => {
                            return <OneCocktailCard strDrink={cocktail.strDrink}/>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Latest;