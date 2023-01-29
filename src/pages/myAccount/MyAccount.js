import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function MyAccount() {
    const {user, isAuth} = useContext(AuthContext)

    return (
            <>
                {isAuth ?
                    <h1>Welcome {user.username}</h1>
                    : <h1>not logged in</h1>
                }
            </>
    );
}

export default MyAccount;