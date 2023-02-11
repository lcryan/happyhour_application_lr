import React from 'react';
import DrinkCategoryQuestion from './DrinkCategoryQuestion'



function Questionnaire(props) {

    const filters = [];
    return (
        <>
            <DrinkCategoryQuestion filters={filters}/>
        </>
    )
}

export default Questionnaire;