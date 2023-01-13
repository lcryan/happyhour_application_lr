import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Registration() {

    //state for form
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //state for functionality

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                email,
                password,
                username,
            });

        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }


    return (
        <main className="container-user-registration">
            <div>
                <h1 className="title-sign-up">Sign up here</h1>

                <p className="text-sign-up"> Join our community of Cocktail Aficionados in just a few seconds!</p>

                <input type="text-field" className="sign-up-password">your password</input>
                <input type="text-field" className="sign-up-password">repeat password</input>

                <button type="button">I am signing up!</button>
                <p className="registered-already">Already signed up?</p>
                <p className="to-sign-in"><Link to={"/login"}>Sign in!</Link></p>
            </div>

        </main>
    );
}

export default Registration;