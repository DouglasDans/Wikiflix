import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import "./Details.css"

export default function Details(){

    const {id} = useParams()
    const [details, setDetails] = useState([]);

    const aaa = React.createClass({
        getInitialState: 
    })


    useEffect(() => {
        apiFunctions.getDetails(id)
            .then((response) => {setDetails(response.data);console.log(response.data);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[]);

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
                        <button onClick={"s"} className="button-voltar">
                            <span class="material-symbols-rounded">
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
                                        </div>
                                    </div>
                                    <div className="streaming-container">
                                        <span>Disponivel em</span>
                                        {/* <WatchProviders/> */}
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-container">
                                <div className="action-buttons-container">
                                    
                                </div>
                                <div className="infos-icon-container">
                                    <div className="info-icon">
                                        <div>{details.vote_average}<span class="material-symbols-rounded">star</span></div>
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
                            
                        </div>
                    </div>
                    <div className="right-details-container">

                    </div>

                </div>
            </main>
        </Fragment>
    )
}

function WatchProviders(){
    const {id} = useParams()
    const [watchProviders, setWatchProviders] = useState([]);

    apiFunctions.movie.getWatchProviders(id)
        .then((response) => {setWatchProviders(response.data.results.BR);console.log(response.data.results.BR);})
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    console.log(watchProviders);
    watchProviders.flatrate.map((item, index) => {
        return(
            <div>
                <img src={apiFunctions.API_IMAGE_URL + item.logo_path}/>
            </div>
        )

    })
}