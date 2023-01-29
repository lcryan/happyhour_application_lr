import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../constants";
import jwtDecode from "jwt-decode";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();

    // MOUNTING EFFECT

    useEffect(() => {

        const storedToken = localStorage.getItem('token');
        const username = localStorage.getItem('username')

        if (storedToken) {

            // TODO error handling here, what if storedToken is not a tokem?
            const decodedToken = jwtDecode(storedToken)
            if (Math.floor(Date.now() / 1000) < decodedToken.exp) {
                console.log("The user is still logged in.")
                void fetchUserData(storedToken);
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
    function login(token) {
        console.log("The user is logged in.")
        localStorage.setItem('token', token);

        void fetchUserData(token, "/myAccount");
    }

    async function fetchUserData(token, redirectUrl) {

        try {

            const response = await axios.get(`${BASE_URL}/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })

            // TODO error handling.
            // TOD WHat if the response returns but is not the format we expect?

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    username: response.data.username
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
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
