import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import apiFunctions from "../../../services/API";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";
import Carousel from "../../Carousel";

export default function Details(){
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
    const [recommendations, setRecommendations] = useState([]);
    const [videos, setVideos] = useState([]);
    const [similar, setSimilar] = useState([]);
    
    useEffect(() => {
        console.log(apiFunctions);
        typeContent.getDetails(id)
            .then((response) => {setDetails(response.data);console.log(response.data);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        // typeContent.getVideos(id)
        //     .then((response) => {setVideos(response.data.results.BR);console.log(response.data.results.BR);})
        //     .catch((err) => {console.error("ops! ocorreu um erro" + err);
        // });
        // typeContent.getSimilar(id)
        //     .then((response) => {setSimilar(response.data.results.BR);console.log(response.data.results.BR);})
        //     .catch((err) => {console.error("ops! ocorreu um erro" + err);
        // });
        typeContent.getWatchProviders(id)
            .then((response) => {setWatchProviders(response.data.results.BR);console.log(response.data.results.BR);})
            .catch((err) => {console.error("ops! ocorreu um erro" + err);
        });
        // typeContent.getRecommendations(id)
        //     .then((response) => {setRecommendations(response);console.log(response);})
        //     .catch((err) => {console.error("ops! ocorreu um erro" + err);
        // });
    },[id]);
    
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer />
                <Banner details={details} watchProviders={watchProviders} linkVideo={videos}/>
                <InfosContainer details={details} />
                <Recommendations recommendations={recommendations} details={details}/>
                <Recommendations recommendations={similar} details={details}/>
            </main>
        </Fragment>
    )
}



function Recommendations(props){
    try {
        return(
            <Carousel itens={props.recommendations.data.results} title={'Recomendações para ' + props.details.title} coverType={'small'}/>
        )
    } catch (e){
        return(
            <Fragment></Fragment>
        )
    }
}

