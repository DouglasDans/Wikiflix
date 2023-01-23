import apiFunctions from "../../../services/API";
import WatchProviders from "./WatchProviders";
import './Banner.css'
import { useNavigate } from "react-router-dom";

export default function Banner(props){
    const navigate = useNavigate()
    const details = props.details
    console.log(props);
    const watchProviders = props.watchProviders
    const genres = details.genres || [{name: "Indisponível"}]
    
    let apiData = {
        title: details.title || details.name || null,
        backdrop_path: details.backdrop_path || null,
        poster_path: details.poster_path || null,
        date: new Date(details.release_date) || (details.first_air_date) || null,
        runtime: details.runtime || 0,
        vote_average: details.vote_average || 0,
        vote_count: details.vote_count || 0,
        popularity: details.popularity || 0,


        number_of_episodes: details.number_of_episodes || null,
        number_of_seasons: details.number_of_seasons || null,
        created_by: details.created_by || null
    }
    
    function voltarPag(){
        navigate(-1)
    }

    return(
        <div className="container-banner">
            <div className="bg-img-banner">
                <img src={apiFunctions.API_IMAGE_URL + apiData.backdrop_path} />
            </div>
            <div className="gradient-banner"></div>
            <div className="container-details-banner">
                <button onClick={voltarPag} className="button-voltar">
                    <span className="material-symbols-rounded">
                        arrow_back
                    </span>
                    Voltar
                </button>
                <div className="container-details-info">
                    <div className="top-container">
                        <div className="left-container">
                            <img src={apiFunctions.API_IMAGE_URL + apiData.poster_path}/>
                        </div>
                        <div className="right-container">
                            <div className="info-title">
                                <h1>{apiData.title}</h1>
                                <div>
                                    <span>{apiData.date.getFullYear()}</span>
                                    &bull; 
                                    <span>{apiData.runtime + " Minutos"}</span>
                                    &bull; 
                                    <span>{genres[0].name}</span>
                                </div>
                            </div>
                                    
                            <WatchProviders data={watchProviders} details={details}/>

                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="action-buttons-container">
                            
                        </div>
                        <div className="infos-icon-container">
                            <div className="info-icon">
                                <div>{apiData.vote_average.toFixed(1)}<span className="material-symbols-rounded">star</span></div>
                                <small>{apiData.vote_count} avaliações</small>
                            </div>
                            <div className="info-icon">
                                <div>12</div>
                                <small>Classificação</small>
                            </div>
                        </div>
                    </div>
                </div>
                <button >s</button>
            </div>
        </div>
    )
}