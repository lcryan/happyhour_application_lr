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

        async function getCocktail() {
            try {
                const response = await axios.get(`${DB_SEARCH_BY_FIRST_LETTER_URL}${cocktailName}`)
                console.log(response.data)
                setName(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (cocktailName) {
                setCocktailName(cocktailName)
            } else {
                console.log("Sorry! We couldn't find your cocktail.");
            }
        }

        void getCocktail()
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
                            <OneCocktailCard
                                strDrink={result.strDrink}
                                keyStr={result.idDrink}
                                imgStr={result.strDrinkThumb}
                            />
                        </Link>
                    ))}
                </div>
            </article>
        </main>
    );
}

export default SearchByLetterBar;