import apiFunctions from "../../../services/API";
import WatchProviders from "./WatchProviders";
import './Banner.css'
import { Fragment } from "react";

export default function Banner(props){
    const details = props.details
    const watchProviders = props.watchProviders
    const genres = details.genres || [{name: "Indisponível"}]
    const typeContent = props.typeContent
    const ratings = props.ratings || null
    console.log(new Date(details.first_air_date));
    let apiData = {
        title: details.title || details.name || null,
        backdrop_path: details.backdrop_path || null,
        poster_path: details.poster_path || null,
        date: new Date(details.release_date) || null,
        runtime: details.runtime || 0,
        vote_average: details.vote_average || 0,
        vote_count: details.vote_count || 0,
        popularity: details.popularity || 0,

        tv_first_date: new Date(details.first_air_date) || null,
        tv_last_date: new Date(details.last_air_date) || null,
        number_of_episodes: details.number_of_episodes || null,
        number_of_seasons: details.number_of_seasons || null,
        created_by: details.created_by || null,
        rating: details.rating
    }
    
    function InfoTitle(){
        if (typeContent === "movie") {
            return(
                <Fragment>
                    <div className="info-title">
                        <h1>{apiData.title}</h1>
                        <div>{console.log(apiData.date)}
                            <span>{apiData.date.getFullYear()}</span>
                            &bull; 
                            <span>{apiData.runtime} minutos</span>
                            &bull; 
                            <span>{genres[0].name}</span>
                        </div>
                    </div>
                </Fragment>
            )
        }
        if (typeContent === "tv") {
            return(
                <Fragment>
                    <div className="info-title">
                        <h1>{apiData.title}</h1>
                        <div>{console.log(apiData.date)}
                            <span>{apiData.tv_first_date.getFullYear()} - {apiData.tv_last_date.getFullYear()}</span>
                            &bull; 
                            <span>{genres[0].name}</span>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }

    return(
        <div className="container-banner">
            <div className="bg-img-banner">
                <div className="gradient-banner"></div>
                <img id="img-banner-details" src={apiFunctions.API_IMAGE_URL + apiData.backdrop_path} />
            </div>
            <div className="container-details-banner">
                <div className="container-details-info">
                    <div className="top-container">
                        <div className="left-container">
                            <img src={apiFunctions.API_IMAGE_URL + apiData.poster_path}/>
                        </div>
                        <div className="right-container">
                            <InfoTitle/>       
                            <WatchProviders data={watchProviders} details={details}/>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="action-buttons-container">
                            
                        </div>
                        <div className="infos-icon-container">
                            <InfoIcon apiData={apiData} typeContent={typeContent} ratings={ratings}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function InfoIcon(props){
    const typeContent = props.typeContent
    const apiData = props.apiData
    

    function Rating(){
        let rating = "null"
        try {
            props.ratings.map((item) => {
                if (item.iso_3166_1 === "BR") {
                    rating = item.rating
                }
            })
        } catch (error) {
            
        }
        return (
            <Fragment>
                <div className="info-icon">
                    <div>{rating}</div>
                    <small>Classificação</small>
                </div>
            </Fragment>
        )
    }

    if (typeContent === "movie") {
        return (
            <Fragment>
                <div className="info-icon">
                    <div>
                        {apiData.vote_average.toFixed(1)}
                        <span className="material-symbols-rounded">star</span>
                    </div>
                    <small>{apiData.vote_count} avaliações</small>
                </div>
                <div className="info-icon">
                    <div>{apiData.popularity.toFixed(0)}</div>
                    <small>Popularidade</small>
                </div>
            </Fragment>
        )
    } 
    if (typeContent === "tv") {
        return (
            <Fragment>
                <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">star</span>
                        {apiData.vote_average.toFixed(1)}
                    </div>
                    <small>{apiData.vote_count} avaliações</small>
                </div>
                <Rating/>
                <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">chart_data</span>
                        {apiData.popularity.toFixed(0)}
                    </div>
                    <small>Popularidade</small>
                </div>
                <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">live_tv</span>
                        {apiData.number_of_seasons}
                    </div>
                    <small>Temporadas</small>
                </div>
                <div className="info-icon">
                    <div>
                        <span className="material-symbols-rounded">live_tv</span>
                        {apiData.number_of_episodes}
                    </div>
                    <small>Episódios</small>
                </div>
                
            </Fragment>
        )
    }
    console.log(typeContent);
}