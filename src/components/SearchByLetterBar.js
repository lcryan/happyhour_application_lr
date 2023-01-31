import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import OneCocktailCard from "./OneCocktailCard";
import {DB_SEARCH_BY_FIRST_LETTER_URL} from "../constants";
import './SearchByLetterBar.css';

function SearchByLetterBar() {

    const [cocktailName, setCocktailName] = useState("");
    const [name, setName] = useState([]);


    useEffect(() => {

        const controller = new AbortController();

        async function getCocktail() {
            try {
                const response = await axios.get(`${DB_SEARCH_BY_FIRST_LETTER_URL}${cocktailName}`,
                    {signal: controller.signal})
                console.log(response.data)
                setName(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (cocktailName) {
                setCocktailName(cocktailName)
            } else {
                console.log("Sorry! We couldn't find your cocktail."); //TODO set error message for user here!
            }
        }

        void getCocktail();

        return function cleanup() {
            controller.abort();
        }
    }, [cocktailName]);

    const handleChange = (e) => {
        e.preventDefault();
        setCocktailName(e.target.value);
    };

    return (
        <main>
            <article className="letter-search-bar">
                <input type="text"
                       placeholder="Search for cocktail name here"
                       value={cocktailName}
                       onChange={handleChange}
                       className="search-bar-page"
                />
            </article>

            <article className="results-box">
                <div className="letter-container">
                    {cocktailName && name && name.map((result) => (
                        <Link to={`/singleCocktail/${result.idDrink}`}>
                            <OneCocktailCard cocktail={result}
                            />
                        </Link>
                    ))}
                </div>
            </article>
        </main>
    );
}

export default SearchByLetterBar;