import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

function Filmes() {
    const [moviesTendenciaSemana, setMoviesTendenciaSemana] = useState([])
    const [moviesNosCinemas, setMoviesNosCinemas] = useState([])
    const [moviesMelhoresAvaliados, setMoviesMelhoresAvaliados] = useState([])
    const [moviesEmBreve, setMoviesEmBreve] = useState([])

    useEffect(() => {
        apiFunctions.movie.getTendenciaSemana
            .then((response) => {setMoviesTendenciaSemana(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.movie.getFilmesNosCinemas
            .then((response) => {setMoviesNosCinemas(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.movie.getFilmesMelhoresAvaliados
            .then((response) => {setMoviesMelhoresAvaliados(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.movie.getFilmesEmBreve
            .then((response) => {setMoviesEmBreve(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }, []);
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <Carousel itens={moviesTendenciaSemana} dataType={apiFunctions.movie.dataType} title={'Em Alta Essa Semana'} coverType={'large'}/>
                <Carousel itens={moviesNosCinemas} dataType={apiFunctions.movie.dataType} title={'Atualmente Nos Cinemas'} coverType={'small'}/>
                <Carousel itens={moviesEmBreve} dataType={apiFunctions.movie.dataType} title={'Futuros Lançamentos'} coverType={'small'}/>
                <Carousel itens={moviesMelhoresAvaliados} dataType={apiFunctions.movie.dataType} title={'Melhores Avaliados'} coverType={'large'}/>
                {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
            </main>
        </Fragment>
    )
}

export default Filmes