import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {GlobalContext} from '../../context/GlobalState';
import {Link, useNavigate} from 'react-router-dom';
import OneCocktailCard from '../../components/OneCocktailCard';
import './Favourites.css'
import SmallLogo from '../../assets/logo/HapyHourLogo_Trudy_beige (100 × 100 px).svg';


function Favourites() {
    const navigate = useNavigate();
    const {user, isAuth} = useContext(AuthContext);
    const {favourites, setFavourites} = useContext(GlobalContext);

    const [localFavourites, setLocalFavourites] = useState(favourites)

    const countChecked = (drinks) => {
        return (getChecked(drinks)).length
    }

    function getChecked(drinks) {
        return drinks.filter(x => x.isChecked)
    }

    function getIdFromDrinksArray(drinks) {
        return drinks.map(x => x.idDrink);
    }

    function checkedHandler(idDrink) {

        const newFav = favourites.map(item => {
            if (item.idDrink !== idDrink) return item
            const myItem = item;
            if (!item.hasOwnProperty('isChecked') && countChecked(favourites) <= 2) {
                myItem.isChecked = true
            } else myItem.isChecked = !myItem.isChecked && countChecked(favourites) <= 2;

            return myItem
        })
        setLocalFavourites(newFav)
    }


    const getDrinks = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (<>
                <h3>You haven't added any cocktails to your favourites yet.</h3>
            </>)
        } else {
            return drinks.map((cocktail) => {
                return (
                    <article className="cocktail-info" key={cocktail.idDrink}>
                        <OneCocktailCard
                            cocktail={cocktail}
                        />
                        <div className="check-button-box">
                            <button className="check-button"
                                    style={cocktail.isChecked ? {color: "red"} : {color: "green"}}
                                    onClick={() => checkedHandler(cocktail.idDrink)}>Recipe please
                            </button>
                        </div>
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
                    <article className="favs-container">
                        {getDrinks(localFavourites)}
                    </article>
                    <button type="submit" className="submit-recipes"
                            onClick={() => navigate(`/recipe/${getIdFromDrinksArray(getChecked(localFavourites)).join(',')}`)}>Get
                        recipes
                    </button>
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
                    <p className="important-note-text">Please remember: you can save up
                        to <strong>10</strong> cocktails
                        in your favourites. </p>
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