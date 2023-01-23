import React, {useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar";
import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'

function SearchPage() {


    return (

        <>
            <div className="outer-container-search-bars">
            <SearchBar/>
            <SearchIngredientBar/>
            </div>
        </>
    );
}

export default SearchPage;