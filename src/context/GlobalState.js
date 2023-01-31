import React, {createContext} from 'react';




const initialState = {
    favouritesList: [],
    addedToFavourites: [],
}

export const GlobalContext = createContext(initialState);

// create provider components
export const GlobalProvider = (props) => {
    const favourites = []

    // TODO get the list of favourites from localstorge
    // if it exists
    // if it doesnt exist initialise empty array


    // TODO create function isFavourite()
    // which checks the favourites array to
    // see if the requested cocktail is favourited already or not
    // export function as part of context to be used in other places


    // TODO implement toggleFavoutire() function that combines the other functions into an
    // easy to use function for use in event handlers on clicks


    const addToFavourites = (cocktail) => {
        // Check if cocktail is in favourites already

        // if already favourite do nothing

        // if not in favourites ad to favourites and update local storage
        console.log("add")
        console.log(cocktail)
        favourites.push(cocktail)
        console.log(favourites)
    }

    const removeFromFavourites = (cocktail) => {
        // loop through array and delete (loop, map, filter)
        // save to localstorage
        console.log("remove")
        console.log(cocktail)
    }

    const contextData = {
        addToFavourites,
        removeFromFavourites,
        favourites
    };

    return (
        <GlobalContext.Provider
            value={contextData}>
            {props.children}
        </GlobalContext.Provider>

    )

}
