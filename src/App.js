import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Latest from './pages/latest/Latest';
import Login from './pages/login/Login';
import Mixologist from './pages/mixologist/Mixologist';
import Registration from './pages/registration/Registration';
import Search from './pages/search/Search';
import TopTwenty from "./pages/topTwenty/TopTwenty";
import TopTwentyOne from "./pages/topTwentyOne/TopTwentyOne";
import Favourites from './pages/favourites/Favourites';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


import './App.css';
import Help from "./pages/help/Help";


import NotFound from "./pages/notFound/NotFound";
import MyAccount from "./pages/myAccount/MyAccount";


function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/mixologist" element={<Mixologist/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/topTwenty" element={<TopTwenty/>}/>
                <Route path="/topTwentyOne/:id" element={<TopTwentyOne/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/myAccount" element={<MyAccount/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
