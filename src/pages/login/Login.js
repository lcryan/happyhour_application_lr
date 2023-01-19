import React, {useContext, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {baseUrl} from "../../constants";
import refreshPage from "../../helpers/refreshPage";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Login(props) {

    const {login} = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleLogin(e) {
        e.preventDefault();
        setError(false)
        try {
            // TODO take the email and password from a form in this page
            const response = await axios.post(`${baseUrl}/api/auth/signin`, {
                email: email,
                username: username,
                password: password,
            })
            console.log(response.data)
            /*login(response.data)*/


        } catch (e) {
            console.error(e)
        }
    }

    return (
        <main>
            <article className="outer-container-login-form">
                <h1 className="title-login">Login here!</h1>
                <p className="text-sign-up"> Happy to have you back!</p>

                <div className="user-input-boxes">
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email-field">
                            e-mailadres
                            <input
                                type="input-email"
                                id="input-email-field"
                                name="input-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="input-username-field">
                            username
                            <input
                                type="input-name"
                                id="input-name-field"
                                name="input-name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="input-password-field">
                            password:
                            <input type="input-password"
                                   id="password-field"
                                   name="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        {error && <p className="error">{errorMessage}</p>}
                        <button
                            type="submit"
                            className="login-button"
                        > Login!
                        </button>
                        <button type="button"
                                className="try-again-button"
                                onClick={refreshPage}
                        > Try again!
                        </button>
                    </form>
                </div>

            </article>
            <p>Don't have an account yet? Sign up <Link to={"/registration"}>here</Link>!</p>
        </main>
    );
}

export default Login