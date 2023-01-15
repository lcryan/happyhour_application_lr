import React, { useContext } from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {baseUrl} from "../../constants";

function Login(props) {

    const { login } = useContext( AuthContext )
    
    async function handleLogin() {
        try {
            // TODO take the email and password from a form in this page
            const response = await axios.post(`${baseUrl}/api/auth/signin`,{
                email: "klaas@novi.nl",
                password: "123456",
            })
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <button type="button" onClick={ handleLogin }>Login</button>
        </div>
    );
}

export default Login;