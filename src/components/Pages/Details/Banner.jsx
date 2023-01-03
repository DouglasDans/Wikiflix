import apiFunctions from "../../../services/API";
import WatchProviders from "./WatchProviders";
import './Banner.css'
import { useNavigate } from "react-router-dom";

export default function Banner(props){
    const navigate = useNavigate()
    const details = props.details
    const watchProviders = props.watchProviders
    const date = new Date(details.release_date)
    const genres = details.genres || [{name: "Indisponível"}]
    
    function voltarPag(){
        navigate(-1)
    }

    return(
        <div className="container-banner">
            <div className="bg-img-banner">
                <img src={apiFunctions.API_IMAGE_URL + details.backdrop_path} />
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
                                    
                            <WatchProviders data={watchProviders} details={details}/>

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
    )
}