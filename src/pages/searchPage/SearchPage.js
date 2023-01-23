import React, {useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar";
import SearchIngredientBar from "../../components/SearchIngredientBar";
import OneCocktailCard from "../../components/OneCocktailCard";

function SearchPage() {


    return (

        <>
            <SearchBar/>
            <SearchIngredientBar/>
        </>
    );
}

export default SearchPage;