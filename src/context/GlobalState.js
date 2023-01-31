import React, {createContext, useReducer,useEffect} from 'react';
import AppReducer from "./AppReducer";

// initial state

const initialState = {
    favouritesList: [],
    addedToFavourites: [],
}

// create GlobalState

export const GlobalContext = createContext(initialState);

// create provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    //actions

    const addCocktailToFavourites = cocktailData => {
        dispatch({type: "ADD_COCKTAIL_TO_FAVOURITES", payload: cocktailData})
    }

    return (
        <GlobalContext.Provider
            value={{
                favouritesList: state.favouritesList,
                addedToFavourites: state.addedToFavourites,
                addCocktailToFavourites
            }}>
            {props.children}
        </GlobalContext.Provider>

    )
}
