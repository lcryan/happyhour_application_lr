import React, {useState} from 'react';
import AlcoholCategoryQuestion from "./AlcoholCategoryQuestion";
import Button from "../Button";
import "./CategoriesStyling.css";

function DrinkCategoryQuestion(props) {

    const [clicked, setClicked] = useState(false);
    const {filters} = props;

    const answer = (clickedFilter) => {
        if (clickedFilter) {
            filters.c = clickedFilter
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
                            onClick={() => answer("Punch / Party Drink")}
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
                            className="ordinary-drink"
                            children="Ordinary Drink"
                            onClick={() => answer("Ordinary Drink")}
                        />
                        <Button
                            type={"button"}
                            className="soft-drink"
                            children="Soft Drink"
                            onClick={() => answer("Soft Drink")}
                        />
                        <Button
                            type={"button"}
                            className="shake"
                            children="Shake"
                            onClick={() => answer("Shake")}
                        />

                        <Button
                            type={"button"}
                            className="other"
                            children="Other"
                            onClick={() => answer("Other / Unknown")}
                        />

                        <Button
                            type={"button"}
                            className="homemade"
                            children="Homemade Liqueur"
                            onClick={() => answer("Homemade Liqueur")}
                        />

                    </div>
                </article>
            </>
        );
    }

    return (<AlcoholCategoryQuestion filters={filters}/>)

}

export default DrinkCategoryQuestion;