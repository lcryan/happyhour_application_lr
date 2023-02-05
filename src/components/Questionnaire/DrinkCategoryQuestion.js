import React, {useState} from 'react';
import AlcoholCategoryQuestion from "./AlcoholCategoryQuestion";
import Button from "../Button";


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
            <div>
                <div className="button-select-group">
                    <Button
                        type={"button"}
                        className="party-drink"
                        disabled={false}
                        children="Party-Drink"
                        onClick={() => answer("Punch_/_Party_Drink")}
                    />
                    <Button
                        type={"button"}
                        className="shot"
                        disabled={false}
                        children="Shot"
                        onClick={() => answer("Shot")}
                    />
                    <Button
                        type={"button"}
                        className="cocktail"
                        disabled={false}
                        children="Cocktail"
                        onClick={() => answer("Cocktail")}
                    />
                    <Button
                        type={"button"}
                        className="no-preference"
                        disabled={false}
                        children="No Preference"
                        onClick={() => answer()}
                    />
                </div>
            </div>
        );
    }

    return (<AlcoholCategoryQuestion filters={filters}/>)

}

export default DrinkCategoryQuestion;