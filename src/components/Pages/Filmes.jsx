import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import MediaSlider from "../Sliders/MediaSlider";

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
                <MediaSlider itens={moviesTendenciaSemana} title={'Em Alta Nessa Semana'} coverSize={'large'}/>
                <MediaSlider itens={moviesNosCinemas} title={'Atualmente Nos Cinemas'} coverSize={'small'}/>
                <MediaSlider itens={moviesEmBreve} title={'Futuros Lançamentos'} coverType={'small'}/>
                <MediaSlider itens={moviesMelhoresAvaliados} title={'Melhores Avaliados'} coverSize={'large'}/>
                {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
            </main>
        </Fragment>
    )
}

export default Filmes