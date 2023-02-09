import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import MediaSlider from "../Sliders/MediaSlider";
import Footer from "../Footer";


export default function Series() {
    const [tvTendenciaSemana, setTvTendenciaSemana] = useState([])
    const [tvNoAr, setTvNoAr] = useState([])
    const [tvLatest, setTvLatest] = useState([])
    const [tvTopRated, setTvTopRated] = useState([])

    useEffect(() => {
        apiFunctions.tv.getTendenciaSemana
            .then((response) => {setTvTendenciaSemana(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.tv.getOnAirToday()
            .then((response) => {setTvNoAr(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.tv.getLatest()
            .then((response) => {setTvLatest(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.tv.getTopRated()
            .then((response) => {setTvTopRated(response.data.results)}) 
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <MediaSlider itens={tvTendenciaSemana} title={'Em alta Nessa Semana'} coverSize={'large'}/>
                <MediaSlider itens={tvNoAr} title={'Programas de TV no ar'} coverSize={'small'}/>
                <MediaSlider itens={tvLatest} title={'Programas recém lançados'} coverSize={'small'}/>
                <MediaSlider itens={tvTopRated} title={'Programas Melhores Avaliados'} coverSize={'large'}/>

                <Footer/>
            </main>
        </Fragment>
    )
}


