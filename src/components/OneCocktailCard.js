import React from 'react';


function OneCocktailCard({articleName, key, imageStr, altDescription, classNamePicture, cocktailNameStr, children}) {
    return (
        <>
            <article className={articleName} key={key}>
                <img src={imageStr} alt={altDescription}
                     className={classNamePicture}/>
                <p>{cocktailNameStr}</p>
                {children}
            </article>


        </>
    );
}

export default OneCocktailCard;
