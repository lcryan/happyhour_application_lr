import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SearchBar() {

    const [searchResult, setSearchResult] = useState("");
    const navigate = useNavigate("");

    useEffect(() => {

        async function getSearchResult() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchResult}`)
                console.log(response.data)
                setSearchResult(searchResult);
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
    }

    return (
        <main>
            <div className="search-bar-outer-container">
                <div className="search-bar-inner-container">
                    <input
                        type="text"
                        placeholder="Search Cocktail here"
                        onChange={handleChange}
                        className="search-bar"
                    />
                    <button className="search-bar-button" type="button" onClick={() => navigate("/searchPage")}> Search</button>
                </div>
            </div>

        </main>
    );
}

export default SearchBar;

