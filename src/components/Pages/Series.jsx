import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import MediaSlider from "../Sliders/MediaSlider";
import Footer from "../Footer";
import getMainHomeData from "../../services/getMainHomeData";

export default function Series() {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            getMainHomeData("tv").then(res => {setApiData(res); setLoading(false)})
        }
        getData()
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
                    <MediaSlider itens={apiData.tvPopular} title={'Em alta Nessa Semana'} coverSize={'large'}/>
                    <MediaSlider itens={apiData.tvOnAir} title={'Programas de TV no ar'} coverSize={'small'}/>
                    <MediaSlider itens={apiData.tvLatest} title={'Programas recém lançados'} coverSize={'small'}/>
                    <MediaSlider itens={apiData.tvTopRated} title={'Programas Melhores Avaliados'} coverSize={'large'}/>
    
                    <Footer/>
                </main>
            </Fragment>
        )
    }

}


