import {Route, Routes} from "react-router-dom"
import './App.css';
import React from "react";
import Home from "./components/Pages/Home";
import Filmes from "./components/Pages/Filmes";
import Series from "./components/Pages/Series";
import Watchlist from "./components/Pages/Watchlist";
import Details from "./components/Pages/Details";
import Search from "./components/Pages/Search";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/filmes" element={<Filmes/>} />
      <Route  path="/series" element={<Series/>} />
      <Route  path="/watchlist" element={<Watchlist/>} />
      <Route  path="/movie/:id" element={<Details/>} />
      <Route  path="/tv/:id" element={<Details/>} />
      <Route  path="/search/:query" element={<Search/>} />
    </Routes>
  );
}

export default App;
