import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import MediaSlider from "../Sliders/MediaSlider";
import Footer from "../Footer";
import getSearchRequest from "../../services/getSearchRequest";

export default function Search(){
    window.scrollTo(0, 0);
    const {query} = useParams()

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            getSearchRequest(query).then(res => {setApiData(res); setLoading(false)})
        }
        getData()
    },[query]);

    return(
        <Fragment>
            <Navbar/>
            <main className="container-main">
                <SearchContainer/>
                <MediaSlider itens={apiData.movieList} title={'Filmes Relacionados'} coverSize={'small'}/>
                <MediaSlider itens={apiData.tvList} title={'Programas de TV Relacionados'} coverSize={'small'}/>
                <Footer/>
            </main>
        </Fragment>
    )
}