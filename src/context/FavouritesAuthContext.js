import React, {createContext, useState} from 'react';


export const FavContext = createContext({});

function FavAuthProvider(props) {

    const [favourite, setFavourite] = useState("");


    return (
        <div></div>
    );
}

export default FavAuthProvider;