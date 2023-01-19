import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";


function SearchBar() {

    const [searchResult, setSearchResult] = useState("");

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
                console.log("We couldn't find your cocktail");
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
            <input
                type="text"
                placeholder="Search Cocktail here"
                onChange={handleChange}
                className="search-bar"
            />
            <button type="button" onClick={() => setSearchResult(searchResult)}> Search</button>
        </main>
    );
}

export default SearchBar;

