import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import "./Details.css"

export default function Details(){

    const {id} = useParams()
    const [details, setDetails] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);
    let genres = [{name: "Indisponível"}]

    useEffect(() => {
        apiFunctions.movie.getWatchProviders(id)
            .then((response) => {setWatchProviders(response.data.results.BR);console.log(response.data.results.BR);})
            .catch((err) => {console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getDetails(id)
            .then((response) => {setDetails(response.data);console.log(response.data);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[]);

    if (details.genres === undefined) {
        console.log("aa");
    } else {
        genres = details.genres
    }

    const date = new Date(details.release_date)
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer />
                <div className="container-banner">
                    <div className="bg-img-banner">
                        <img src={apiFunctions.API_IMAGE_URL + details.backdrop_path} />
                    </div>
                    <div className="gradient-banner"></div>
                    <div className="container-details-banner">
                        <button  className="button-voltar">
                            <span className="material-symbols-rounded">
                                arrow_back
                            </span>
                            Voltar
                        </button>
                        <div className="container-details-info">
                            <div className="top-container">
                                <div className="left-container">
                                    <img src={apiFunctions.API_IMAGE_URL + details.poster_path}/>
                                </div>
                                <div className="right-container">
                                    <div className="info-title">
                                        <h1>{details.title}</h1>
                                        <div>
                                            <span>{date.getFullYear()}</span>
                                            &bull; 
                                            <span>{details.runtime + " Minutos"}</span>
                                            &bull; 
                                            <span>{genres[0].name}</span>
                                        </div>
                                    </div>
                                    <div className="streaming-container">
                                        <span>Disponivel em</span>
                                        <div className="streaming-icons-container">
                                            <WatchProviders data={watchProviders} details={details}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container">
                                <div className="action-buttons-container">
                                    
                                </div>
                                <div className="infos-icon-container">
                                    <div className="info-icon">
                                        <div>{details.vote_average}<span className="material-symbols-rounded">star</span></div>
                                        <small>{details.vote_count} avaliações</small>
                                    </div>
                                    <div className="info-icon">
                                        <div>12</div>
                                        <small>Classificação</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-container">
                    <div className="left-details-container">
                        <h2>{details.tagline}</h2>
                        <p>{details.overview}</p>
                        <div className="generos-container">
                            <ListGenres data={details.genres}/>
                        </div>
                    </div>
                    <div className="right-details-container">

                    </div>

                </div>
            </main>
        </Fragment>
    )
}

function WatchProviders(props){
    let watchProviders = props.data
    if (watchProviders === undefined || watchProviders.length === 0) {
        return(
            <small>Indiponível</small>
        )
    } else {
        return (
            watchProviders.flatrate.map((item) => {
                return(
                    <img  src={apiFunctions.API_IMAGE_URL + item.logo_path}/>
                )
            })
        )
    }    
}

function ListGenres(props){
    let genres = props.data
    if (genres === undefined) {
        return(
            <Fragment></Fragment>
        )
    } else {
        return (
            genres.map((item) => {
                return(
                    <span>{item.name}</span>
                )
            })
        )
    } 
}
