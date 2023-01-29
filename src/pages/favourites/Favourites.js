import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Favourites(props) {

    const {user, isAuth} = useContext(AuthContext)

    return (
        <>
            {isAuth ?
                <h1>Welcome {user.username}, your favourites are:</h1>
                :
                <p>You are not logged in.</p>

            }
        </>
    );
}

export default Favourites;