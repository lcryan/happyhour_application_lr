import React, {useEffect, useState} from "react";
import OneCocktailCard from "../../components/OneCocktailCard";
import axios from "axios";
import "./TopTwenty.css";
import {Link} from "react-router-dom";
import DividerLine from "../../assets/icons/dividerline.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

function TopTwenty() {

    const [topTwenty, setTopTwenty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {

        const controller = new AbortController();

        async function getTopTwenty() {

            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`,
                    {signal: controller.signal});
                setTopTwenty(response.data.drinks);
                setLoading(false);

            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled");
                } else {
                    setError(true);
                    setErrorMessage("Sorry, we couldn't get your cocktails.")
                }
            }
        }

        void getTopTwenty();
        return function cleanup() {
            controller.abort()
        }
    }, []);


    return (
        <>
            <div className="header-top-twenty">
                <h1 className="title-top-twenty"> Our fans' faves...</h1>
                <img src={DividerLine} className="divider-line-top-twenty" alt="beige-thin-line"/>
            </div>
            {loading ? (<div className="loading-message-top-twenty">Loading...</div>) : error ? (
                <div className="error-message-top-twenty">{errorMessage}</div>
            ) : (
                <div className="container-top-twenty">

                    {topTwenty.map((cocktail) => {
                        return (
                            <article className="cocktail-details" key={cocktail.idDrink}>
                                <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                                    <OneCocktailCard cocktail={
                                        cocktail
                                    }
                                    />
                                </Link>
                            </article>
                        )
                    })}
                </div>
            )}
            <div className="back-arrow-tt-box">
                <Link to="/"><FontAwesomeIcon className="back-arrow-tt" icon={faCircleArrowLeft}/></Link>
            </div>
        </>
    );
}

export default TopTwenty;