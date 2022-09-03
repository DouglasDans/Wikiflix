import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

export default function Home(){
    const [moviesTendenciaSemana, setMoviesTendenciaSemana] = useState([])
    const [moviesNosCinemas, setMoviesNosCinemas] = useState([])
    const [moviesMelhoresAvaliados, setMoviesMelhoresAvaliados] = useState([])
    const [moviesEmBreve, setMoviesEmBreve] = useState([])
    const [moviesRecemLancados, setRecemLancados] = useState([])

    useEffect(() => {
        apiFunctions.getTendenciaSemana
            .then((response) => {setMoviesTendenciaSemana(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getFilmesNosCinemas
            .then((response) => {setMoviesNosCinemas(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getFilmesMelhoresAvaliados
            .then((response) => {setMoviesMelhoresAvaliados(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getFilmesEmBreve
            .then((response) => {setMoviesEmBreve(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        // apiFunctions.getFilmeRecemLancados
        //     .then((response) => {setRecemLancados(response.data.results)})
        //     .catch((err) => {
        //     console.error("ops! ocorreu um erro" + err);
        // });

    }, []);
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <Carousel itens={moviesTendenciaSemana} title={'Em Alta Essa Semana'} coverType={'large'}/>
                <Carousel itens={moviesNosCinemas} title={'Atualmente Nos Cinemas'} coverType={'small'}/>
                <Carousel itens={moviesEmBreve} title={'Futuros Lançamentos'} coverType={'small'}/>
                <Carousel itens={moviesMelhoresAvaliados} title={'Melhores Avaliados'} coverType={'large'}/>
                {/* <Carousel itens={moviesRecemLancados} title={'Recém-Lançados'} coverType={'small'}/> */}
                {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
            </main>
        </Fragment>
    )
}