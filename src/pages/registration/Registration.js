import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import './Registration.css'

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
            navigate('/login');

        } catch (error) {
            console.log(error)
            setError(true)
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

                        {error && <p className="error">This account already exists. Please try another email-adres.</p>}
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        > Sign up!
                        </button>
                    </form>
                </div>

            </article>
            <p>Do you already have an account? Then you can log in <Link to={"/login"}>here</Link>!</p>
        </main>
    );
}

export default Registration;