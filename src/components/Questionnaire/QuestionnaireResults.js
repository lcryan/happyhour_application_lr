import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import OneCocktailCard from "../OneCocktailCard";
import "./QuestionnaireResults.css";
import DividerLine from "../../assets/icons/dividerline.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import {DB_FILTER_BY_CATEGORY_URL} from "../../constants";
import {DB_LOOKUP_BY_ID_URL} from "../../constants";

function QuestionnaireResults(props) {

    const {filters} = props;
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchCocktails() {

            try {

                let filterQuery = "g=" + filters.g
                setLoading(true)
                const response = await axios.get(`${DB_FILTER_BY_CATEGORY_URL}${filterQuery}`, {
                    signal: controller.signal
                });
                const cocktails = [];
                console.log(JSON.stringify(filters))
                for (const d of response.data.drinks) {
                    const result = await axios.get(`${DB_LOOKUP_BY_ID_URL}${d.idDrink}`)
                    if (result.data.drinks[0].strAlcoholic === filters.a && result.data.drinks[0].strCategory === filters.c) {
                        cocktails.push(d)
                    }
                }
                setResult(cocktails.slice(0, 10))
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        void fetchCocktails();
        return function cleanup() {
            controller.abort();
        }
    }, [filters]);

    const getResults = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (
                <>
                    <p className="not-found-questionnaire">Sorry,no cocktails match your search criteria. Please try
                        again.</p>
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
            {loading ? (
                <p className="loading-message-questionnaire">We are getting those cocktails for you...</p>

            ) : (<article className="questionnaire-cocktails-container">
                {getResults(result)}
            </article>)
            }
            <div className="back-arrow-box-questionnaire">
                <Link to="/"><FontAwesomeIcon icon={faCircleArrowLeft} className="back-arrow-questionnaire"/></Link>
            </div>
        </>

    );
}

export default QuestionnaireResults;