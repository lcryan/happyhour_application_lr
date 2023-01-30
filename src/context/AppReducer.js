export default (state, action) => {
    switch (action.type) {
        case "ADD_COCKTAIL_TO_FAVOURITES":
            return {
                ...state,
                favouritesList: [action.payload, ...state.favouritesList]
            }

        default:
            return state
    }
}