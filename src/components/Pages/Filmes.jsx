import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import MediaSlider from "../Sliders/MediaSlider";
import Footer from "../Footer";
import getMainHomeData from "../../services/getMainHomeData";

function Filmes() {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            getMainHomeData("movie").then(res => {setApiData(res); setLoading(false)})
        }
        getData()
    },[]);

    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <MediaSlider itens={apiData.moviePopular} title={'Em Alta Nessa Semana'} coverSize={'large'}/>
                <MediaSlider itens={apiData.movieAtualmenteCinemas} title={'Atualmente Nos Cinemas'} coverSize={'small'}/>
                <MediaSlider itens={apiData.movieEmBreveCinemas} title={'Futuros Lançamentos'} coverSize={'small'}/>
                <MediaSlider itens={apiData.movieTopRated} title={'Melhores Avaliados'} coverSize={'large'}/>
                {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
                <Footer/>
            </main>
        </Fragment>
    )
}

export default Filmes