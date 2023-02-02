import React from 'react';
import './OneCocktailCard.css'


function OneCocktailCard({children, cocktail}) {
    return (
        <>
            <article className="latest-cocktail"
                     key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt="foto of according cocktail"
                     className="cocktail-foto"/>
                <p>{cocktail.strDrink}</p>
                {children}
            </article>

        </>
    );
}

export default OneCocktailCard;
