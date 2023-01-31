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
                {/*// TODO restyle overlay into CA*/}
                <p>{cocktail.strDrink}</p>
                {children}
            </article>

        </>


    );
}

export default OneCocktailCard;
