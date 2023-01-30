import React, { Fragment, useEffect, useState } from "react"; 
import { useParams} from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import apiFunctions from "../../../services/API";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";
import MediaSlider from "../../Sliders/MediaSlider";



function Details(){
    window.scrollTo(0, 0);

    let typeContent = 0

    if(window.location.pathname.includes("/movie")){
        typeContent = apiFunctions.movie
    } else if(window.location.pathname.includes("/tv")){
        typeContent = apiFunctions.tv
    }else {
        alert("opaaaaa")
    }
    
    const {id} = useParams() 
    const [details, setDetails] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);
    const [videos, setVideos] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [similar, setSimilar] = useState([]);
    
    useEffect(() => {
        typeContent.getDetails(id).then((response) => {setDetails(response.data)})
        
        typeContent.getWatchProviders(id).then((response) => {setWatchProviders(response.data.results.BR)})
        
        typeContent.getVideos(id).then((response) => {setVideos(response.data)})

        typeContent.getReviews(id).then((response) => {setReviews(response.data)})
        
        typeContent.getSimilar(id).then((response) => {setSimilar(response.data.results)})
        
        typeContent.getRecommendations(id).then((response) => {setRecommendations(response.data.results)})
    },[id]);

    return (
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer />
                <Banner details={details} watchProviders={watchProviders}/>
                <InfosContainer details={details} videos={videos} reviews={reviews}/>
                <MediaSlider itens={recommendations} title={"Recomendações para " + (details.title || details.name)} coverSize={'small'}/>
                <MediaSlider itens={similar} title={"Resultados similares"} coverSize={'small'}/>
            </main>
        </Fragment>
    )
}
export default Details

