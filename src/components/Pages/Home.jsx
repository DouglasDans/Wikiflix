import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

export default function Home(){
    // useState
    const [movies, setMovies] = useState([])

    useEffect(() => {
        apiFunctions.getPopularGames
            .then((response) => {setMovies(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }, []);
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <Carousel itens={movies} title={'Filmes em Tendência'} coverType={'large'}/>
                <Carousel itens={movies} title={'Populares'} coverType={'small'}/>
            </main>
        </Fragment>
    )
}