import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {GlobalContext} from "../../context/GlobalState";
import {Link} from "react-router-dom";
import OneCocktailCard from "../../components/OneCocktailCard";
import './Favourites.css'

function Favourites() {

    const {user, isAuth} = useContext(AuthContext);
    const {favourites} = useContext(GlobalContext);

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
                <h2 className="not-logged-in-message">You are not logged in.</h2>
            }
            {isAuth ?
                <article className="favs-container"> {getDrinks(favourites)}
                </article>
                :
                <article className="message-user">
                    <h3>If you have an account: </h3>
                    <h3>please sign in.</h3>
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
                    <p>Not only have we 2000 cocktails</p>
                </div>
            }
        </>
    );
}

export default Favourites;