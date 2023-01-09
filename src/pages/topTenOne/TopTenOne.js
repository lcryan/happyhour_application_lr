import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


function TopTenOne() {
    const [oneCocktail, setOneCocktail] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {

        async function getOneCocktail() {
            try {

                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                /*console.log(response.data)*/
                setOneCocktail(response.data.drinks)

                /*  if (oneCocktail) {
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

            <p className="cocktail-item-name">Cocktail Name: {oneCocktail.strDrink} </p>
            <img src={oneCocktail.strDrinkThumb}/>
        </>
    );
}

export default TopTenOne;
