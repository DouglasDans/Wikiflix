import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";

export default function Search(){
    window.scrollTo(0, 0);
    const {query} = useParams()
    console.log(query);

    const [querySearchMovies, setQuerySearchMovies] = useState([])
    useEffect(() => {
        console.log("dfdf");
        apiFunctions.movie.getSearchList(query)
            .then((response) => {setQuerySearchMovies(response.data.results); console.log(response);})
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

            </main>
        </Fragment>
    )
}