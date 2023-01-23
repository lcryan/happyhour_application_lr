import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {DB_SEARCH_URL} from "../constants";


function SearchBar() {

    const [searchResult, setSearchResult] = useState("");
    const [name, setName] = useState([]);


    useEffect(() => {

        async function getSearchResult() {
            try {
                const response = await axios.get(`${DB_SEARCH_URL}${searchResult}`)
                console.log(response.data)
                setName(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (searchResult) {
                setSearchResult(searchResult)
            } else {
                console.log("Sorry! We couldn't find your cocktail.");
            }
        }

        void getSearchResult()
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
                            {searchResult && name && name.map((element) => (
                                <li className="suggest-list" key={element.idDrink}>
                                    <NavLink
                                        onClick={recentInput}
                                        className="suggestions"
                                        to={`/searchPage/${element.idDrink}`}
                                    >
                                        {element.strDrink}
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

