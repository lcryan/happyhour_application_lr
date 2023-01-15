import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {baseUrl} from "../constants";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    // login function

    function login(jwt) {
        console.log("The user is logged in")
        localStorage.setItem('token', jwt)

        const decodedToken = jwtDecode(jwt)

        async function fetchUserData() {

            try {
                const response = await axios.get(`${baseUrl}/api/user`,  {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`
                    }
                })
                // TODO check that the response values here are valid for our API
                setAuth({
                    isAuth: true,
                    user: response.data
                })
                navigate("/")
                console.log(response)
            } catch (error) {
                console.log(error)
                // TODO handle the error cases here
            }

        }
        void fetchUserData()
    }

    function logout(  ) {
        // TODO translate this message
        console.log("De gebruiker is uitgelogd 🔒")
        localStorage.clear()
        setAuth({
            isAuth: false,
            user: null
        })
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
