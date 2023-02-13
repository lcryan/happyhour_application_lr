import React, {createContext, useState} from 'react';

const getInitialState = () => {
    return {
        favouritesList: [],
        addedToFavourites: [],
    };
};

export const GlobalContext = createContext(getInitialState());

const localStorageKey = 'favourites';

export const GlobalProvider = (props) => {

    let [favourites, setFavourites] = useState([]);

    try {
        const store = JSON.parse(localStorage.getItem(localStorageKey))

        if (store && Array.isArray(store)) {
            favourites = store
        }
    } catch (error) {
        console.log(error)
    }

    function isFavourite(cocktail) {
        if (cocktail) {
            const myFav = favourites.find((x) => x.idDrink === cocktail.idDrink)
            return myFav ? true : false
        }
        return false
    }

    const addToFavourites = (cocktail) => {
        if (favourites.length < 10) {
            if (!isFavourite(cocktail)) {
                favourites.push(cocktail)
                setFavourites(favourites)
                localStorage.setItem(localStorageKey, JSON.stringify(favourites))
            }
            console.log("add")
            console.log(cocktail)
            return ""
        }
        return "Sorry, you cannot add more favourite cocktails."
    }

    const removeFromFavourites = (cocktail) => {
        favourites = favourites.filter(x => x.idDrink !== cocktail.idDrink)
        setFavourites(favourites)
        localStorage.setItem(localStorageKey, JSON.stringify(favourites))
        console.log("remove")
        console.log(cocktail)
        return favourites
    }

    const contextData = {
        addToFavourites,
        removeFromFavourites,
        isFavourite,
        favourites
    };

    return (
        <GlobalContext.Provider
            value={contextData}>
            {props.children}
        </GlobalContext.Provider>
    )
}
