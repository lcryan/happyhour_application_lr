import React, {useEffect, useState} from 'react';

import SearchBar from "../../components/SearchBar";
import {DB_BASE_URL, DB_SEARCH_INGREDIENT_URL, DB_SEARCH_URL} from "../../constants";
import axios from "axios";


function SearchPage() {
    const [ingredient, setIngredient] = useState("");
    const [nameIngredient, setNameIngredient] = useState([])


    useEffect(() => {
        async function getIngredients() {

            try {
                const response = await axios.get(`${DB_SEARCH_INGREDIENT_URL}${ingredient}`)
                console.log(response.data)
                setIngredient(response.data.drinks)

            } catch (error) {
                console.log(error)
            }
            if (ingredient) {
                setIngredient(ingredient);
            } else {
                console.log("Sorry, we couldn't find the ingredient you were looking for. Please try again.")
            }

        }

        void getIngredients()
    }, [ingredient])

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    };

    const recentInput = () => {
        setIngredient("");
    }


    return (
        <>
            <SearchBar/>

        </>
    );
}

export default SearchPage;