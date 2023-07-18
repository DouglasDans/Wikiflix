import React, { Fragment, useState, useEffect } from "react";
import MediaSlider from "../Sliders/MediaSlider";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import Footer from "../Footer";
import getMainHomeData from "../../services/getMainHomeData";
import BannerSlider from "../Sliders/BannerSlider";

export default function Home(){
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            await getMainHomeData("home").then(res => {setApiData(res); setLoading(false)})
        }
        Promise.resolve(getData())
    },[loading]);

    if (loading) {
        return(
            <Fragment>
                <Navbar />
                <main className="container-loading">
                    <img src="/img/compact_wikiflix_logo.png" height={"50px"}/>
                    {/* <h4>Carregando...</h4> */}
                </main>
            </Fragment>
        )
    } else {
        return(
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer/>
                    <BannerSlider  itens={apiData.tendenciaSemana}/>
                    <MediaSlider itens={apiData.movieAtualmenteCinemas} title={'Atualmente nos cinemas'} coverSize={'small'}/>
                    <MediaSlider itens={apiData.tvOnAir} title={'Programas de TV no ar'} coverSize={'small'}/>
                    <MediaSlider itens={apiData.movieEmBreveCinemas} title={'Em breve nos cimenas'} coverSize={'small'}/>
                    <MediaSlider itens={apiData.movieTopRated} title={'Melhores Avaliados'} coverSize={'large'}/>
                    {/* <Carousel itens={movies} title={'Melhores filmes de 90min'} coverType={'small'}/> */}
                    <Footer/>
                </main>
            </Fragment>
        )
    }

    
}