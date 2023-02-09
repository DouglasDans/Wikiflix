import React, { Fragment, useState, useEffect } from "react";
import MediaSlider from "../Sliders/MediaSlider";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import Footer from "../Footer";

export default function Home(){
    const [tendenciaSemana, setTendenciaSemana] = useState([])
    const [moviesNosCinemas, setMoviesNosCinemas] = useState([])
    const [tvNoAr, setTvNoAr] = useState([])
    const [moviesMelhoresAvaliados, setMoviesMelhoresAvaliados] = useState([])
    const [moviesEmBreve, setMoviesEmBreve] = useState([])

    useEffect(() => {
        apiFunctions.getTendenciaSemana()
            .then((response) => {setTendenciaSemana(response.data.results)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.movie.getFilmesNosCinemas
            .then((response) => {setMoviesNosCinemas(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.tv.getOnAir()
            .then((response) => {setTvNoAr(response.data.results)}) 
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
                <MediaSlider itens={tendenciaSemana} title={'Em alta nessa semana'} coverSize={'large'}/>
                <MediaSlider itens={moviesNosCinemas} title={'Atualmente nos cinemas'} coverSize={'small'}/>
                <MediaSlider itens={tvNoAr} title={'Programas de TV no ar'} coverSize={'small'}/>
                <MediaSlider itens={moviesEmBreve} title={'Em breve nos cimenas'} coverSize={'small'}/>
                <MediaSlider itens={moviesMelhoresAvaliados} title={'Melhores Avaliados'} coverSize={'large'}/>
                {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
                

                <Footer/>
            </main>
        </Fragment>
    )
}