import React, {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {BACKEND_BASE_URL} from "../../constants";
import {Link} from "react-router-dom";
import "./Login.css";
import BigLogo from "../../assets/logo/HapyHourLogo_Roger_brown.png";
import Button from "../../components/Button";


function Login() {

    const {login} = useContext(AuthContext)

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setError(false)
        try {
            setLoading(true)
            setErrorMessage("")
            const response = await axios.post(`${BACKEND_BASE_URL}/api/auth/signin`, {
                username: username,
                password: password,
            })
            console.log(response.data)
            login(response.data.accessToken);
        } catch (error) {
            console.error(error)
            setError(true);
            setErrorMessage("Invalid username or password. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>{loading ? <div className="loading-login">Loading...</div> : (
            <div className="login-form">
                <div className="login-form-logo-container">
                    <img src={BigLogo} className="big-logo-login" alt="brown colored happy hour logo"/>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="login-form-content">
                        <h3>Login to your account</h3>
                        <label htmlFor="input-username-field">
                            username
                            <input
                                type="name"
                                id="input-name-field"
                                name="input-name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="input-password-field">
                            password
                            <input type="password"
                                   id="password-field"
                                   name="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        {error && <p className="error-message-login">{errorMessage}</p>}
                        <Button
                            type="submit"
                            className="login-button"
                            children="Login!"
                        />
                        <div className="form-links">
                            <p>Don't have an account yet? <p>Sign up <Link to={"/registration"}>here</Link>!</p></p>
                        </div>
                    </div>
                </form>
            </div>)}
        </>
    );
}

export default Login;