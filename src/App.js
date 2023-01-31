import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Latest from './pages/latest/Latest';
import Login from './pages/login/Login';
import Mixologist from './pages/mixologist/Mixologist';
import Registration from './pages/registration/Registration';
import TopTwenty from "./pages/topTwenty/TopTwenty";
import SingleCocktail from "./pages/singleCocktail/SingleCocktail";
import Favourites from './pages/favourites/Favourites';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SearchPage from "./pages/searchPage/SearchPage";

import './App.css';
import Help from "./pages/help/Help";

import NotFound from "./pages/notFound/NotFound";
import MyAccount from "./pages/myAccount/MyAccount";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";



function App() {

    const {isAuth} = useContext(AuthContext);

    return (
        <div className="App">
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/myAccount" element={isAuth ? <MyAccount/> : <Login/>}/>
                <Route path="/mixologist" element={<Mixologist/>}/>
                <Route path="/topTwenty" element={<TopTwenty/>}/>
                <Route path="/singleCocktail/:id" element={<SingleCocktail/>}/>
                <Route path="/favourites" element={isAuth ? <Favourites/> : <Login/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/myAccount" element={<MyAccount/>}/>
                <Route path="/searchPage/:id" element={<SearchPage/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
