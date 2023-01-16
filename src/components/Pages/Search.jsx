import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

export default function Search(){
    window.scrollTo(0, 0);
    const {query} = useParams()

    const [querySearchMovies, setQuerySearchMovies] = useState([])
    const [querySearchTv, setQuerySearchTv] = useState([])
    useEffect(() => {
        apiFunctions.getSearchListMovie(query)
            .then((response) => {setQuerySearchMovies(response.data.results); console.log(response);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getSearchListTv(query)
            .then((response) => {setQuerySearchTv(response.data.results); console.log(response);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, [query]);

    return(
        <Fragment>
            <Navbar/>
            <main className="container-main">
                <SearchContainer/>
                <Carousel itens={querySearchMovies} title={'Filmes Relacionados'} coverType={'small'}/>
                <Carousel itens={querySearchTv} title={'Programas de TV Relacionados'} coverType={'small'}/>

            </main>
        </Fragment>
    )
}