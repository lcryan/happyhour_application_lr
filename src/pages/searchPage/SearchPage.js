import React, {useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar";
import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'

function SearchPage() {


    return (

        <>
            <div className="title-search-page">
                <h1 className="h1-search-page"> Search your heart out! </h1>
                <h3 className="subtitle-search-page">Find cocktails that you really want to drink. We drink to that!</h3>
            </div>
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