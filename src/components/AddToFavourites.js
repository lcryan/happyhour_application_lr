import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './AddToFavourites.css'


const AddToFavourites = () => {
    return (

        <div>
            <span className="text-favourites">Add to favourites </span>
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
        </div>
    );
}

export default AddToFavourites;