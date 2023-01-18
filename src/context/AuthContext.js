import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../constants";


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

        const storedToken= localStorage.getItem('token');

        if (storedToken) {

            if (Math.floor(Date.now() / 1000) < storedToken.exp) {
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


        void fetchUserData(token, "/home");
    }

    async function fetchUserData(token, redirectUrl) {

        try {
            const response = await axios.get(`${baseUrl}/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })

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
        Logout: logout
    };


    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
