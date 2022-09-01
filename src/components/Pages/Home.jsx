import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

export default function Home(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        apiFunctions.getPopularMovies
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
                <Carousel itens={movies} title={'Filmes Em Tendência'} coverType={'large'}/>
                <Carousel itens={movies} title={'Populares no Brasil'} coverType={'small'}/>
                <Carousel itens={movies} title={'Recém-lançados'} coverType={'small'}/>
                <Carousel itens={movies} title={'Próximos Lançamentos'} coverType={'large'}/>
                <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/>
            </main>
        </Fragment>
    )
}