import React from 'react';
import {Link} from "react-router-dom";
import './OneCocktailCard.css'


function OneCocktailCard({children, cocktail, checkedHandler}) {
    return (
        <>
            <input className="recipe-checkbox" type="checkbox"
                   id="recipe-checkbox" value="recipe-checkbox"
                   onClick={(e) => checkedHandler(e, cocktail)}/>
            <label htmlFor="recipe-checkbox"> Recipe please </label>
            <Link to={`/singleCocktail/${cocktail.idDrink}`}>

            <article className="latest-cocktail"
                     key={cocktail.idDrink}>

                <img src={cocktail.strDrinkThumb} alt="foto of according cocktail"
                     className="cocktail-foto"/>
                <p>{cocktail.strDrink}</p>
                {children}
            </article>
            </Link>

        </>
    );
}

export default OneCocktailCard;
