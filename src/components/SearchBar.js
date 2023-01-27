import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {DB_SEARCH_URL} from "../constants";

function SearchBar() {

    const [searchResult, setSearchResult] = useState("");
    const [name, setName] = useState([]);


    useEffect(() => {

        const controller = new AbortController();

        async function getSearchResult() {
            try {
                const response = await axios.get(`${DB_SEARCH_URL}${searchResult}`,
                    {signal: controller.signal})
                console.log(response.data)
                setName(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (searchResult) {
                setSearchResult(searchResult) //TODO make error messages, if input is wrong !

            } else {
                return "We couldn't find your cocktail"
            }
        }

        void getSearchResult();

        return function cleanup() {
            controller.abort();
        }
    }, [searchResult]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchResult(e.target.value);
    };

    const recentInput = () => {
        setSearchResult("");
    }

    return (
        <main>
            <div className="search-bar-outer-container">
                <div className="search-bar-inner-container">
                    <input
                        type="text"
                        placeholder="Search Cocktail here"
                        value={searchResult}
                        onChange={handleChange}
                        className="search-bar"
                    />
                    <div className="result-container">
                        <ul className="suggestions-ul">
                            {searchResult && name && name.map((oneCocktail) => (
                                <li className="suggest-list" key={oneCocktail.idDrink}>
                                    <NavLink
                                        onClick={recentInput}
                                        to={`/searchPage/${oneCocktail.idDrink}`}>
                                        {oneCocktail.strDrink}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchBar;

