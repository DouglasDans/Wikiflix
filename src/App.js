import {Route, Routes} from "react-router-dom"
import './App.css';

import Home from "./components/Pages/Home";
import Filmes from "./components/Pages/Filmes";
import Series from "./components/Pages/Series";
import Watchlist from "./components/Pages/Watchlist";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/filmes" element={<Filmes/>} />
      <Route exact path="/series" element={<Series/>} />
      <Route exact path="/watchlist" element={<Watchlist/>} />
    </Routes>
  );
}

export default App;
