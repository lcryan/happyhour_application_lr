import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'
import SingleCocktail from "../singleCocktail/SingleCocktail";

function SearchPage() {

    return (

        <>
            <article className="header-search-page">
                <h1 className="title-search-page"> Search your heart out! </h1>
                <h3 className="second-title-search-page">We drink to that!</h3>
            </article>
            <article className="search-bar-container">
                <h4 className="title-search-bar">Search by ingredient</h4>
                <div className="search-page-bar"><SearchIngredientBar/></div>
            </article>
            <div className="single-cocktail-page"><SingleCocktail/></div>
            <section className="ingredient-result-container">
                <div className="output-searchbar-home">
                </div>
            </section>
        </>
    )
}

export default SearchPage;