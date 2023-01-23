import React, {useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar";
import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'

function SearchPage() {


    return (

        <>

            <h1 className="title-search-page"> Search your heart out! </h1>
            <article className="outer-container-search-bars">
                <div className="name-box">
                    <h4>Search by name</h4>
                    <SearchBar/>
                </div>
                <div className="ingredient-box">
                    <h4>Search by ingredient</h4>
                    <SearchIngredientBar/>
                </div>
            </article>
        </>
    );
}

export default SearchPage;