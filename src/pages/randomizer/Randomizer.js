import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import OneCocktailCard from "../../components/OneCocktailCard";

function Randomizer() {

    const [loading, setLoading] = useState(true);
    const [randomCocktail, setRandomCocktail] = useState([]);

    const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios.get(apiUrl).then(response => {
            console.log(response.data)
            setRandomCocktail(response.data.drinks)
        }).catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, []);


    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    if (loading) return <h2>"Fetching an awesome cocktail for you..."</h2>

    return (
        <>
            <section className="outer-random-cocktail-container">
                <div className="inner-content-container-random-cocktail">
                    <div className="random-cocktail">
                        {randomCocktail.map((cocktail) => {
                                return (
                                    <OneCocktailCard
                                        keyStr={cocktail.idDrink}
                                        imgStr={cocktail.strDrinkThumb}
                                        strDrink={cocktail.strDrink}
                                        children={cocktail.strAlcoholic}
                                    />
                                )
                            }
                        )

                        }
                    </div>

                </div>
            </section>

        </>
    );
}

export default Randomizer;