import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import './Registration.css';
import validateForm from './validation'
import {BASE_URL} from "../../constants";
import refreshPage from "../../helpers/refreshPage";

function Registration() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        const formResult = validateForm(email, username, password);

        if (!formResult.status) {

            setError(true)
            setErrorMessage(formResult.messages.join("\n"))
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
                email,
                password,
                username,
            });

            switch (response.status) {
                case 200:
                    navigate('/login');
                    break;
                default:
                    setErrorMessage("We encountered an unexpected error. Please try again later.")
                    break;
            }
        } catch (error) {
            console.log(error)
            setError(true)

            const response = error.response;
            switch (response.status) {
                case 400:
                    setError(true)

                    if (response.data.error) {
                        setErrorMessage(response.data.error)
                    } else if (response.data.message) {
                        setErrorMessage(response.data.message)
                    } else {
                        setErrorMessage("We encountered an unexpected error. Please try again later.")
                    }
                    break;
                case 500:
                    setError(true)
                    if (response.data.error) {
                        setErrorMessage(response.data.error)
                    } else if (response.data.message) {
                        setErrorMessage(response.data.message)
                    } else {
                        setErrorMessage("We encountered an unexpected error. Please try again later.")
                    }
                    break;
                default:
                    setErrorMessage("We encountered an unexpected error. Please try again later.")
                    break;
            }
        }
        setLoading(false);
    }


    return (
        <main>
            <article className="outer-container-registration-form">
                <h1 className="title-sign-up">Sign up here!</h1>
                <p className="text-sign-up"> Join our community of Cocktail Aficionados in just a few seconds!</p>

                <div className="user-input-boxes">
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <label htmlFor="email-field">
                            e-mailadres
                            <input
                                type="email"
                                id="email-field"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="username-field">
                            username
                            <input
                                type="name"
                                id="name-field"
                                name="name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password-field">
                            password:
                            <input type="password"
                                   id="password-field"
                                   name="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        {error && <p className="error">{errorMessage}</p>}
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        > Sign up!
                        </button>
                        <button type="button"
                                className="try-again-button"
                                onClick={refreshPage}
                        > Try again!
                        </button>
                    </form>
                </div>

            </article>
            <p>Do you already have an account? Then you can log in <Link to={"/login"}>here</Link>!</p>
        </main>
    );
}

export default Registration;