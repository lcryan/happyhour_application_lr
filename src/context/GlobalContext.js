import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";

// initial state

const initialState = {
    favouritesList: [],
    addedToFavourites: [],
}

// create GlobalContext

export const GlobalContext = createContext(initialState);

// create provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions

    const addCocktailToFavourites = cocktailData => {
        dispatch({type: "ADD_COCKTAIL_TO_FAVOURITES", payload: cocktailData})
    }

    return (
        <GlobalContext.Provider
            value={{
                addedToFavourites: state.addedToFavourites,
                favouritesList: state.favouritesList,
                addCocktailToFavourites
            }}>
            {props.children}
        </GlobalContext.Provider>

    )
}
