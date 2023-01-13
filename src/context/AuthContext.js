/*
import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

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
        console.log("You are logged in!")
        localStorage.setItem('token', jwt)

        const decodedToken = jwtDecode(jwt)

        async function fetchUserData() {

            try {
                const response = await axios.get(`http://localhost:8080/users/${decodedToken}`,  {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`
                    }

                })

            } catch (error) {
                console.log(error)

            }

        }

    }


    return (
        <div>


        </div>
    );
}

export default AuthContextProvider;*/
