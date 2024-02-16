import React, { Fragment, useEffect, useState } from "react"; 

import './Details.css'

import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import MediaSlider from "../../Sliders/MediaSlider";
import Footer from "../../Footer";
import getDetails from "../../../services/getDetailsData";
import Banner from "./Banner/Banner";
import Descricao from "./MoreDetails/Descricao";
import ListGenres from "./MoreDetails/ListGenres";
import YoutubeVideo from "./MoreDetails/YoutubeVideo";
import ActorSlider from "../../Sliders/ActorSlider";
import Review from "./MoreDetails/Review";
import SideDetails from "./MoreDetails/SideDetails";

function Details(){
    window.scrollTo(0, 0);

    let typeContent = null

    if(window.location.pathname.includes("/movie")){
        typeContent = "movie"
    } else if(window.location.pathname.includes("/tv")){
        typeContent = "tv"
    }
    
    const {id} = useParams() 
    
    const [apiData, setAPIData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        async function getData() {
            getDetails(id, typeContent).then(res => {
                setAPIData(res);
                setLoading(false)
            })
        }
        getData()
    },[id]);
    
    if (loading) {
        return(
            <Fragment>
                <Navbar />
                <main className="container-loading">
                    <img src="/img/compact_wikiflix_logo.png" height={"50px"}/>
                </main>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer />

                    <Banner {...apiData}/>

                    <div className="details-container">
                        <div className="left-details-container">
                            <Descricao {...apiData}/>
                            <ListGenres {...apiData}/>
                            <YoutubeVideo {...apiData}/>
                            <ActorSlider {...apiData}/>
                            <Review {...apiData}/>
                        </div>
                        <div className="right-details-container">
                            <SideDetails {...apiData} typeContent={typeContent}/> 
                        </div>
                    </div>

                    <MediaSlider itens={apiData.recommendations.results} title={"Recomendações para " + (apiData.details.title || apiData.details.name)} coverSize={'small'}/>
                    <MediaSlider itens={apiData.similar.results} title={"Resultados similares"} coverSize={'small'}/>
    
                    <Footer/>
                </main>
            </Fragment>
        )
        
    }

}
export default Details

