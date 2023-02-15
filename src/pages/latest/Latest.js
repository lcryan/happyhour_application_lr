import React, {useEffect, useState} from 'react';
import axios from "axios"
import './Latest.css'
import OneCocktailCard from "../../components/OneCocktailCard";
import {Link} from "react-router-dom";
import DividerLine from '../../assets/icons/dividerline.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";


function Latest() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function getAllCocktails() {
            try {
                setLoading(true)
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`, {
                    signal: controller.signal
                });
                console.log(response)
                if (response) {
                    setData(response.data.drinks || [])
                } else {
                    console.log("We couldn't find any drinks.")
                }
                setData(response.data.drinks)
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }

        void getAllCocktails();
        return function cleanup() {
            controller.abort();
        }
    }, [])

    const getDrinks = (drinks) => {
        if (!drinks.length || drinks.length === 0) {
            return (<>
                <p>Sorry, no drinks found.</p>
            </>)
        } else {
            return data.map((cocktail) => {
                return (
                    <article className="cocktail-info" key={cocktail.idDrink}>
                        <Link to={`/singleCocktail/${cocktail.idDrink}`}>
                            <OneCocktailCard cocktail={cocktail}
                            />
                        </Link>
                    </article>
                )
            })
        }
    }
    return (
        <>
            <div className="header-latest">
                <h1 className="title-latest">The New Kids on the Block are...</h1>
                <img src={DividerLine} className="divider-line-latest" alt="beige colored divider line"/>
            </div>
            {loading ? (
                <p className="loading-latest">Getting the newest cocktails for you...</p>
            ) : (
                <section className="outer-content-container-latest-cocktails">
                    <div className="inner-content-container-latest-cocktails">
                        <div className="latest-cocktails-container">
                            {getDrinks(data)}
                        </div>
                    </div>
                </section>
            )}
            <div className="back-arrow-box">
                <Link to="/"><FontAwesomeIcon className="back-arrow" icon={faCircleArrowLeft}/></Link>
            </div>
        </>
    );
}

export default Latest;