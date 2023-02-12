import React, {useState} from 'react';
import Button from "../Button";
import GlassCategoryQuestion from "./GlassCategoryQuestion";
import "./CategoriesStyling.css";

function AlcoholCategoryQuestion(props) {

    const [clicked, setClicked] = useState(false);
    const {filters} = props;

    const answer = (clickedFilter) => {
        if (clickedFilter) {
            filters.push(`a=${clickedFilter}`)
        }
        setClicked(true)
    }

    if (!clicked) {
        return (
            <div>
                <div className="title-cat">
                    <h3>Alcoholic or non-alcoholic or...?</h3>
                </div>
                <div className="button-select-group">
                    <Button
                        type={"button"}
                        className="alcoholic"
                        children="Alcoholic"
                        onClick={() => answer("alcoholic")}

                    />
                    <Button
                        type={"button"}
                        className="non-alcoholic"
                        children="Non-alcoholic"
                        onClick={() => answer("non_alcoholic")}
                    />
                    <Button
                        type={"button"}
                        className="optional-alcohol"
                        children="Optional-alcohol"
                        onClick={() => answer("optional_alcohol")}
                    />
                    <Button
                        type={"button"}
                        className="no-preference"
                        children="No Preference"
                        onClick={() => answer()}
                    />
                </div>
            </div>
        );
    }

    return (<GlassCategoryQuestion filters={filters}/>)

}


export default AlcoholCategoryQuestion;