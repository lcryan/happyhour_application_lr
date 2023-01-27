import React, {useEffect, useRef, useState} from 'react';
import './Favourites.css'

function Favourites() {

    const favouriteData = useRef();
    const handleClick = () => {
        console.log(favouriteData.current.value, "initial value")
        localStorage.setItem("InputValue", favouriteData.current.value)
    }


    return (
        <>
            <div className="inner-container-favourites">
                <input ref={favouriteData}></input>
                <button onClick={handleClick}>Add to favourites</button>
            </div>
        </>
    );
}

export default Favourites;