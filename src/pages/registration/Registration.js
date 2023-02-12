import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import './Registration.css';
import validateForm from './validation'
import {BASE_URL} from "../../constants";
import BigLogo from "../../assets/logo/HapyHourLogo_Roger_brown.png";
import Button from "../../components/Button";

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
                        setErrorMessage("We couldn't find the page you have requested. Please try again.")
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
        <>
            <div className="registration-form">
                <div className="registration-form-logo-container">
                    <img src={BigLogo} className="big-logo-registration" alt="brown colored happy hour logo"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="registration-form-content">
                        <h3>Register to Happy Hour here</h3>
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
                        <Button
                            className="register-button"
                            children="Sign up!"
                            type="submit"/>
                        <div className="registration-links">
                            <p>Do you already have an account? Then you can log in <Link to={"/login"}>here</Link>!</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Registration;