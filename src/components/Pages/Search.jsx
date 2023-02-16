import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import MediaSlider from "../Sliders/MediaSlider";
import Footer from "../Footer";

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
                <MediaSlider itens={querySearchMovies} title={'Filmes Relacionados'} coverSize={'small'}/>
                <MediaSlider itens={querySearchTv} title={'Programas de TV Relacionados'} coverSize={'small'}/>

                <Footer/>
            </main>

        </Fragment>
    )
}