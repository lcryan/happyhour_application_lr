import React from 'react';
import './OneCocktailCard.css'
import AddToFavourites from "./AddToFavourites";

function OneCocktailCard({ children, cocktail}) {
    return (
        <>
            <article className="latest-cocktail"
                     key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt="foto of according cocktail"
                     className="cocktail-foto"/>
                <AddToFavourites cocktail={cocktail}/>
                {/*!// TODO result here - so all OneCocktailCards show up overlay */}
                <p>{cocktail.strDrink}</p>
                {children}
            </article>

        </>
    );
}

export default OneCocktailCard;
