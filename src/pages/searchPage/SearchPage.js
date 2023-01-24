import SearchByLetterBar from "../../components/SearchByLetterBar";
import SearchIngredientBar from "../../components/SearchIngredientBar";
import './SearchPage.css'
import SingleCocktail from "../singleCocktail/SingleCocktail";

function SearchPage() {


    return (

        <>
            <article className="header-searchbars">
                <h1 className="h1-search-page"> Search your heart out! </h1>
                <h3 className="subtitle-search-page">Find cocktails that you really want to drink. We drink to
                    that!</h3>
                <div className="name-box">
                    <h4>Search by first letter only</h4>
                    <SearchByLetterBar/>
                </div>
                <div className="ingredient-box">
                    <h4>Search by ingredient</h4>
                </div>
                <section className="ingredient-results">
                    <SearchIngredientBar/>
                </section>
                <div className="output-searchbar-home">
                    <SingleCocktail/>
                </div>


            </article>


        </>
    );
}

export default SearchPage;