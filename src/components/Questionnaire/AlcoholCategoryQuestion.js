import React, {useState} from 'react';
import Button from "../Button";
import GlassCategoryQuestion from "./GlassCategoryQuestion";

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
                <div className="button-select-group">
                    <Button
                        type={"button"} //TODO check which kind of button this has to be ? In all cases!
                        className="alcoholic"
                        disabled={false}
                        children="Alcoholic"
                        onClick={() => answer("Alcoholic")}
                        //TODO onlick functionality still has to be added and has to iterate through
                    />
                    <Button
                        type={"button"}
                        className="non-alcoholic"
                        disabled={false}
                        children="non-alcoholic"
                        onClick={() => answer("Non_alcoholic")}
                    />
                    <Button
                        type={"button"}
                        className="optional-alcohol"
                        disabled={false}
                        children="optional-alcohol"
                        onClick={() => answer("Optional_alcohol")}
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
    return (<GlassCategoryQuestion filters={filters}/>)

}


export default AlcoholCategoryQuestion;