import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import Carousel from "../Sliders/Carousel";


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
                <Carousel itens={tvTendenciaSemana} dataType={apiFunctions.tv.dataType} title={'Em alta Nessa Semana'} coverType={'large'}/>
                <Carousel itens={tvNoAr} dataType={apiFunctions.tv.dataType} title={'Programas de TV no ar'} coverType={'small'}/>
                {/* <Carousel itens={tvLatest} dataType={apiFunctions.tv.dataType} title={'Programas recém lançados'} coverType={'small'}/> */}
                <Carousel itens={tvTopRated} dataType={apiFunctions.tv.dataType} title={'Programas Melhores Avaliados'} coverType={'large'}/>
            </main>
        </Fragment>
    )
}


