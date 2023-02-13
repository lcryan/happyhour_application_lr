import React from 'react';
import DrinkCategoryQuestion from './DrinkCategoryQuestion'



function Questionnaire(props) {

    const filters = {a:"", c:"", g:""};
    return (
        <>
            <DrinkCategoryQuestion filters={filters}/>
        </>
    )
}

export default Questionnaire;