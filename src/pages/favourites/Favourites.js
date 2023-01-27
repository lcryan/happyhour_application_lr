import React, {useEffect, useState} from 'react';

function Favourites() {

    const [favoriteCocktail, setFavouriteCocktail] = useState();

    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(favoriteCocktail))
    })


    return (
        <>
            <h1>User's Favourite's List</h1>
        </>
    );
}

export default Favourites;