import React, {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";
import "./AddToFavourites.css";
import {GlobalContext} from "../context/GlobalState";

const AddToFavourites = ({cocktail}) => {
    const {
        addToFavourites,
        removeFromFavourites,
        isFavourite
    } = useContext(GlobalContext)

    const [error, setError] = useState("");
    const addFavourite = () => {
        const result = addToFavourites(cocktail)
        console.log(result)
        setError(result);
    }
    if (isFavourite(cocktail)) {
        return (
            <div className="overlay" onClick={() => removeFromFavourites(cocktail)}>
                <div>
                    <span className="text-favourites">Remove from favourites </span>
                    <FontAwesomeIcon icon={faXmark} className="x-mark-icon"/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="overlay" onClick={addFavourite}>
                <div>
                    <span className="text-favourites">Add to favourites </span>
                    <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
                    {error}
                </div>
            </div>
        );
    }
}

export default AddToFavourites;