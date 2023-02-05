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
                        type={"button"}
                        className="alcoholic"
                        disabled={false}
                        children="Alcoholic"
                        onClick={() => answer("alcoholic")}

                    />
                    <Button
                        type={"button"}
                        className="non-alcoholic"
                        disabled={false}
                        children="non-alcoholic"
                        onClick={() => answer("non_alcoholic")}
                    />
                    <Button
                        type={"button"}
                        className="optional-alcohol"
                        disabled={false}
                        children="optional-alcohol"
                        onClick={() => answer("optional_alcohol")}
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

    return (<GlassCategoryQuestion filters={filters}/>)

}


export default AlcoholCategoryQuestion;