import React, {useEffect, useState} from 'react';
import axios from "axios";

function TopTenOne() {
    const [oneCocktail, setOneCocktail] = useState();
    const [loading, setLoading] = useState(false);

    useEffect((url, config)=>{

        async function getOneCocktail() {
            try {

                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=`)
                console.log(response)
            }
            catch (e) {
                console.log(e)
            }
        }

    },[]);



    return (

        <>


        </>
    );
}

export default TopTenOne;
