import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'
import SingleCocktail from "../singleCocktail/SingleCocktail";

function SearchPage() {


    return (

        <>
            <article className="header-search-page">
                <h1 className="h1-search-page"> Search your heart out! </h1>
                <h3 className="subtitle-search-page">Find cocktails that you really want to drink. We drink to
                    that!</h3>
            </article>

            <article className="search-bar-group">
                <article className="search-ingredient-box">
                    <div className="ingredient-box">
                        <h4 className="title-search-ingredient-bar">Search by ingredient</h4>
                        <div className="search-engine"><SearchIngredientBar/></div>
                    </div>
                </article>
            </article>

            <section className="ingredient-results">
                <div className="output-searchbar-home">
                    <SingleCocktail/>
                </div>
            </section>
        </>
    )
}

export default SearchPage;