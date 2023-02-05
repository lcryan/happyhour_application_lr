import React, {useState} from 'react';
import Button from "../Button";
import QuestionnaireResults from "./QuestionnaireResults";

function GlassCategoryQuestion(props) {
    const [clicked, setClicked] = useState(false);
    const {filters} = props;

    const answer = (clickedFilter) => {
        if (clickedFilter) {
            filters.push(`g=${clickedFilter}`)
        }
        setClicked(true)
    }

    if (!clicked) {
        return (
            <div>
                <div className="button-select-group">
                    <Button
                        type={"button"} //TODO check which kind of button this has to be ? In all cases!
                        className="highball-glass"
                        disabled={false}
                        children="Highball Glass"
                        onClick={() => answer("Highball_glass")}
                        //TODO onlick functionality still has to be added and has to iterate through
                    />
                    <Button
                        type={"button"}
                        className="cocktail-glass"
                        disabled={false}
                        children="Cocktail Glass"
                        onClick={() => answer("Cocktail_glass")}
                    />
                    <Button
                        type={"button"}
                        className="old-fashioned-glass"
                        disabled={false}
                        children="Old-fashioned Glass"
                        onClick={() => answer("Old-fashioned_glass")}
                    />
                    <Button
                        type={"button"}
                        className="cordial-glass"
                        disabled={false}
                        children="Cordial Glass"
                        onClick={() => answer("Cordial_glass")}
                    />
                </div>
            </div>
        );
    }

    // TODO render the next question in the chain
    return (
        <QuestionnaireResults filters={filters}/>
    )

}

export default GlassCategoryQuestion;