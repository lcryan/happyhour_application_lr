import React from 'react';
import DrinkCategoryQuestion from './DrinkCategoryQuestion'

function Questionnaire() {

    const filters = {a: "", c: "", g: ""};
    return (
        <>
            <DrinkCategoryQuestion filters={filters}/>
        </>
    )
}

export default Questionnaire;