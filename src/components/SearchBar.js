import React from 'react';
import {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {DB_SEARCH_URL} from "../constants";

function SearchBar() {

    const [searchResult, setSearchResult] = useState("");
    const [name, setName] = useState([]);

    const controller = new AbortController();

    async function getSearchResult(searchResult) {
        try {
            const response = await axios.get(`${DB_SEARCH_URL}${searchResult}`,
                {signal: controller.signal})
            console.log(response.data)
            setName(response.data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchResult(e.target.value);
        getSearchResult(e.target.value);
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

