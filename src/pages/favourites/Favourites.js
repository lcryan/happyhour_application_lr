import React, {useEffect, useState} from 'react';

function Favourites() {

    const [favouriteCocktail, setFavouriteCocktail] = useState();

    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(favouriteCocktail))
    })


    return (
        <>
            <h1>User's Favourite's List</h1>
        </>
    );
}

export default Favourites;