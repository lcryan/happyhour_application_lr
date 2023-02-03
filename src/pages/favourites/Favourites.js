import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {GlobalContext} from "../../context/GlobalState";
import {Link, useNavigate} from "react-router-dom";
import OneCocktailCard from "../../components/OneCocktailCard";
import './Favourites.css'
import SmallLogo from '../../assets/logo/HapyHourLogo_Trudy_beige (100 × 100 px).svg'


function Favourites() {

    const {user, isAuth} = useContext(AuthContext);
    const {favourites} = useContext(GlobalContext);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    function getRecipes(checkbox)
    {
        if(checked === true && checkbox.length <= 3)
            return setChecked(checked)
        else if(!checked || checkbox.length >= 3)
            window.location.href = 'http://www.yahoo.com';
    }

    const getDrinks = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (<>
                <p>nothing found</p>
            </>)
        } else {
            return drinks.map((cocktail) => {
                return (
                    <article className="cocktail-info" key={cocktail.idDrink}>
                        <form className="one-fav"><input className="recipe-checkbox" type="checkbox"
                                                         id="recipe-checkbox" value="recipe-checkbox"/>
                            <label htmlFor="recipe-checkbox"> Recipe please </label>
                        </form>
                        <Link to={`/singleCocktail/${cocktail.idDrink}`}> <OneCocktailCard cocktail={cocktail}/>
                        </Link>
                    </article>
                )
            })

        }
    }

    return (
        <>

            {isAuth ?
                <div className="header-favs">
                    <h1 className="title-favs">Welcome {user.username}!</h1>
                    <h2 className="subtitle-favs">Your favs are:</h2>
                </div>
                :
                <div className="not-logged-in-box">
                    <h2 className="not-logged-in-message">You are not logged in.</h2>
                    <img src={SmallLogo} className="small-logo-favs"
                         alt="smaller version of happy hour logo beige"/>
                </div>
            }
            {isAuth ?
                <div className="container">
                    <article className="favs-container"> {getDrinks(favourites)}
                    </article>
                    <button type="submit" className="submit-recipes">Get recipes</button>
                </div>
                :
                <article className="message-user">
                    <h3>If you have an account: </h3>
                    <h3>please <Link to="/login">sign in</Link>.</h3>
                    <br/>
                    <h3>If you don't,</h3>
                    <h3> please <Link to="/registration">sign up</Link>.</h3>
                </article>

            }

            {isAuth ?
                <div className="text-box-favs">
                    <p className="important-note-text">Please remember: <p>you can save up
                        to <strong>10</strong> cocktails
                        on your favourites
                        page.</p> <p>Choose <strong>3</strong> cocktails at a time to view the full recipe.Cheers!</p>
                    </p>
                </div> :
                <div className="message-two-user">
                    <p>Why you should join us!</p>
                    <p>Not only have we 2000+ cocktails online,</p>
                    <p>but you can save your favourites too!</p>
                    <p>And even make them! We love sharing our community's</p>
                    <p>knowledge! Do you wanna share your favourite cocktail</p>
                    <p>ideas? Then send use a message to info@cocktail-heads-incorporated.com</p>
                    <p>Cheers!</p>
                </div>
            }
        </>
    );
}

export default Favourites;