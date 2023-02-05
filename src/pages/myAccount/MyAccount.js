import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import "./MyAccount.css"

function MyAccount() {
    const {user, isAuth} = useContext(AuthContext)

    return (
        <>
            {isAuth ?
                <article className="account-info-text">
                    <h1>Welcome back Cocktail Lover!</h1>
                    <div className="account-gratitude-text">
                        <p> Thank you for being a member of our Happy Hour community.</p>
                    </div>
                    <div className="account-information">
                        <p>Your username is: {user.username}</p>
                        <p>Your email is: {user.email}</p>
                    </div>
                    <div className="account-security-text">
                        <p>For security reasons we do not display your password here.</p>
                        <p>Should you have forgotten your password, please contact: help@happyhour.com</p>
                    </div>
                    <div className="account-goodbye-text">
                        <h2> We hope you enjoy your experience here at HappyHour!</h2>
                        <h3>Cheers!</h3>
                        <h3>Yours dearly,</h3>
                        <h3>The Happy Hour Team</h3>
                    </div>
                </article>
                : <h1>You are not logged in.</h1>
            }
        </>
    );
}

export default MyAccount;