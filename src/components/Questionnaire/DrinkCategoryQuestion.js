import React, {useState} from 'react';
import AlcoholCategoryQuestion from "./AlcoholCategoryQuestion";
import Button from "../Button";
import PartyButton from "../../assets/buttonPictures/PartyButton.png";

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
                        type={"button"} //TODO check which kind of button this has to be ? In all cases!
                        className="party-drink"
                        disabled={false}
                        children="Party-Drink"
                        style={{backgroundImage: PartyButton}}
                        onClick={() => answer("Punch_/_Party_Drink")}
                        //TODO onlick functionality still has to be added and has to iterate through
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

    // TODO render the next question in the chain
    return (<AlcoholCategoryQuestion filters={filters}/>)

}

export default DrinkCategoryQuestion;