import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DB_SEARCH_URL} from "../constants";
import {NavLink} from "react-router-dom";

function SearchNameBar(props) {

    const [cocktailName, setCocktailName] = useState("");
    const [name, setName] = useState([]);


    useEffect(() => {

        async function getSearchResult() {
            try {
                const response = await axios.get(`${DB_SEARCH_URL}${cocktailName}`)
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

        void getSearchResult()
    }, [cocktailName]);

    const handleChange = (e) => {
        e.preventDefault();
        setCocktailName(e.target.value);
    };

    const recentInput = () => {
        cocktailName("");
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



export default SearchNameBar;