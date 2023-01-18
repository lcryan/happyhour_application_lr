import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../constants";
import jwt_decode from "jwt-decode"

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    // MOUNTING EFFECT

    useEffect(() => {

        const storedToken = localStorage.getItem('accessToken');

        // als er WEL een token is, haal dan opnieuw de gebruikersdata op
        if (storedToken) {
            const decodedToken = jwt_decode(storedToken)
            if (Math.floor(Date.now() / 1000) < decodedToken.exp) {
                console.log("The user is still logged in.")
                void fetchUserData(storedToken, decodedToken.sub);
            } else {
                console.log("The token has expired")
                localStorage.removeItem('token')
            }
        } else {
            toggleIsAuth({
                ...isAuth,
                isAuth: false,
                user: null,
                status: 'done'
            })
        }
    }, [])


//LOGIN FUNCTION
    function login(jwt) {
        console.log("The user is logged in.")
        localStorage.setItem('token', jwt);
        const decodedToken = jwt_decode(jwt);

        void fetchUserData(jwt, decodedToken.sub, "/myAccount");
    }

    async function fetchUserData(jwt, id, redirectUrl) {

        try {
            const response = await axios.get(`${baseUrl}/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
            })

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    username: response.data.username,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }
            console.log(response)
        } catch (error) {
            console.log(error);
            toggleIsAuth({
                ...isAuth,
                status: 'done',
            }); // TODO handle the error cases here
        }
    }

    function logout() {
        console.log("The user is logged out.")
        localStorage.removeItem('accessToken'); //here remove item, because we still want to keep favourites in the local Storage
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: 'done'
        });
        navigate('/login') //TODO navigate to not logged in page instead of home!//
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        status: isAuth.status,
        login,
        logout
    };


    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
