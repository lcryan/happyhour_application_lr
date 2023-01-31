export default (state, action) => {
    switch (action.type) {
        case "ADD_COCKTAIL_TO_FAVOURITES":
            return {
                ...state,
                favouritesList: [action.payload, ...state.favouritesList] //spread adds to the already existing watchlist
            }

        default:
            return state
    }
}