import React, { Fragment, useState, useEffect } from "react";
import getPopularGames from "../../APIrequests";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";

export default function Home(){
    // useState
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2b22702bf9dc45986d22dd21add08ec7&language=pt-BR&page=1').then(response => response.json()).then(data => {
            console.log(data.results)
            setMovies(data.results)})  
    },[]);
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