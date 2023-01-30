import React, {createContext, useReducer, useState} from 'react';
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

    return (
        <GlobalContext.Provider value={{addedToFavourites: state.favouritesList}}>
            {props.children}
        </GlobalContext.Provider>

    )
}
