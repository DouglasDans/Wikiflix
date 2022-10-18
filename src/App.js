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
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/filmes" element={<Filmes/>} />
      <Route exact path="/series" element={<Series/>} />
      <Route exact path="/watchlist" element={<Watchlist/>} />
      <Route exact path="/details/:id" element={<Details/>} />
      <Route exact path="/search/:query" element={<Search/>} />
    </Routes>
  );
}

export default App;

class ScrollToTop extends React.Component {

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0);
      }
  }

  render() {
      return null;
  }
}