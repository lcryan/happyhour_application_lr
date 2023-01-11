import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


function TopTenOne() {
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

                /*       if (oneCocktail) {
                           setOneCocktail(response.data.drinks)
                           setLoading(false);
                       } else {
                           setOneCocktail(null);
                           setLoading(false);
                       }*/
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
            {Object.keys(oneCocktail).length > 0 && <><p className="cocktail-item-name">Cocktail
                Name: {oneCocktail[0].strDrink} </p>
                <img alt="foto of cocktail" src={oneCocktail[0].strDrinkThumb}/>
                <ul className="ingredients-list">
                    Ingredients:
                    <li className="ingredients"> {oneCocktail[0].strIngredient1}</li>

                    {oneCocktail[0].strIngredient2}

                </ul>

            </>

            }

        </>
    );
}

export default TopTenOne;
