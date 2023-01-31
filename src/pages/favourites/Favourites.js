import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {GlobalContext} from "../../context/GlobalState";
import {Link} from "react-router-dom";
import OneCocktailCard from "../../components/OneCocktailCard";

function Favourites(props) {

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
                        <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                            <OneCocktailCard cocktail={cocktail} />
                        </Link>
                    </article>

                )
            })
        }
    }
    return (
        <>
            {isAuth ?
                <h1>Welcome {user.username}, your favourites are: {getDrinks(favourites)}</h1>
                :
                <p>You are not logged in.</p>
            }
        </>
    );
}

export default Favourites;