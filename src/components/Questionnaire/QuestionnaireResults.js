import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import OneCocktailCard from "../OneCocktailCard";
import "./QuestionnaireResults.css";
import DividerLine from "../../assets/icons/dividerline.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";

function QuestionnaireResults(props) {

    const {filters} = props
    const [result, setResult] = useState([]);

    useEffect(() => {

        async function fetchCocktails() {
            try {
                const filterQuery = `${filters.join('&')}`
                console.log(filterQuery)
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterQuery}`)
                console.log(response)
                setResult(response.data.drinks.slice(0, 10))
            } catch (error) {
                console.log(error)
            }
        }

        void fetchCocktails();
    },);

    const getResults = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (
                <>
                    <p>No cocktails found.</p>
                </>
            )
        } else {
            return (result.map((cocktail) => {
                return (
                    <>
                        <article className="cocktail-details" key={cocktail.idDrink}>
                            <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                                <OneCocktailCard
                                    cocktail={cocktail}
                                />
                            </Link>
                        </article>
                    </>
                )
            }))
        }
    }

    return (
        <>
            <div className="header-questionnaire">
                <h1>This is what we found for you</h1>
                <img src={DividerLine} className="divider-line-questionnaire" alt="beige thin element divider"/>
            </div>
            <article className="questionnaire-cocktails-container">
                {getResults(result)}
            </article>

            <div className="back-arrow-box-questionnaire">
                <Link to="/"><FontAwesomeIcon icon={faCircleArrowLeft} className="back-arrow-questionnaire"/></Link>
            </div>
        </>

    );
}

export default QuestionnaireResults;