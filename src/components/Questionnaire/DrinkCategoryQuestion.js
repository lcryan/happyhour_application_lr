import React, {useState} from 'react';
import AlcoholCategoryQuestion from "./AlcoholCategoryQuestion";
import Button from "../Button";
import "./CategoriesStyling.css";

function DrinkCategoryQuestion(props) {

    const [clicked, setClicked] = useState(false);
    const {filters} = props;

    const answer = (clickedFilter) => {
        if (clickedFilter) {
            filters.push(`c=${clickedFilter}`)
        }
        setClicked(true)
    }

    if (!clicked) {
        return (
            <>
                <div className="title-cat">
                    <h3>Which drink would you like to drink?</h3>
                </div>
                <article className="outer-container">
                    <div className="button-select-group">
                        <Button
                            type={"button"}
                            className="party-drink"
                            children="Party-Drink"
                            onClick={() => answer("Punch_/_Party_Drink")}
                        />
                        <Button
                            type={"button"}
                            className="shot"
                            children="Shot"
                            onClick={() => answer("Shot")}
                        />
                        <Button
                            type={"button"}
                            className="cocktail"
                            children="Cocktail"
                            onClick={() => answer("Cocktail")}
                        />
                        <Button
                            type={"button"}
                            className="no-preference"
                            children="No Preference"
                            onClick={() => answer()}
                        />
                    </div>
                </article>
            </>
        );
    }

    return (<AlcoholCategoryQuestion filters={filters}/>)

}

export default DrinkCategoryQuestion;