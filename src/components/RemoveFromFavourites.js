import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const RemoveFromFavourites = () => {

    return (
        <span className="mr-2">Remove from favourites
        <FontAwesomeIcon icon={faXmark}/>
        </span>
    )

}