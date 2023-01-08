import React from 'react';
import './OneCocktailCard.css'


function OneCocktailCard({keyStr, imgStr, strDrink, children}) {
    return (
        <>
            <article className="latest-cocktail"
                     key={keyStr}>
                <img src={imgStr} alt="foto of according cocktail"
                     className="cocktail-foto"/>
                <p>{strDrink}</p>
                {children}
            </article>

        </>


    );
}

export default OneCocktailCard;
