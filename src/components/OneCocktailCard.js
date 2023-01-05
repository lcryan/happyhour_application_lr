import React, {useEffect, useState} from 'react'
import axios from "axios";




function OneCocktailCard({strDrink}) {

    const [cocktailData, setCocktailData] = useState([])

    useEffect(() => {
        async function getOneCocktail() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php/${strDrink}`);
                console.log(response);
                setCocktailData(response.data);
            } catch (e) {
                console.error(e)
            }
        }

       void getOneCocktail();
    }, [])

    return (

        <>
            {Object.keys(cocktailData).length > 0 &&
            <>
                <section className="cocktail-card-box">
                    <article className="cocktail-card">
                        <h2>{cocktailData.data.drinks.strDrink} </h2>
                        <img src={cocktailData.data.drinks.strDrinkThumb}/>
                    </article>
                </section>
            </>
            }
        </>
    );
}



export default OneCocktailCard;