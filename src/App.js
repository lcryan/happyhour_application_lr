import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Latest from './pages/latest/Latest';
import Login from './pages/login/Login';
import Mixologist from './pages/mixologist/Mixologist';
import Randomizer from './pages/randomizer/Randomizer';
import Registration from './pages/registration/Registration';
import Search from './pages/search/Search';
import TopTen from './pages/topten/TopTen';


import './App.css';

function App() {
    return (
        <>
            {/* Future navigation */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/mixologist" element={<Mixologist/>}/>
                <Route path="/randomizer" element={<Randomizer/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/topten" element={<TopTen/>}/>
            </Routes>


        </>
    );
}

export default App;
