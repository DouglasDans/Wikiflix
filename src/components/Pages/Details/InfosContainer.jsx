import ListGenres from "./ListGenres";
import './InfosContainer.css'
import { Fragment } from "react";
import apiFunctions from "../../../services/API";

export default function InfosContainer(props){
    const details = props.details
    const date = new Date(details.release_date)

    let apiData = {
        tagline: details.tagline || "",
        overview: details.overview || "",
        original_title: details.original_title || details.original_name|| "Indisponível",
        release_date: details.release_date || details.first_air_date || "Indisponível",
        production_companies: function () {
            try {
                let data = []
                details.production_companies.map((item) => {
                    data.push(item.name)
                })
                return data.toString()
            } catch (error) {
                return "Indisponível"
            }
        },
        production_countries: function () {
            try {
                let data = []
                details.production_countries.map((item) => {
                    data.push(item.name)
                })
                return data.toString(", ")
            } catch (error) {
                return "Indisponível"
                console.warn(error);
            }
        },


    }

    return (
        <div className="details-container">
            <div className="left-details-container">
                <h2>{apiData.tagline}</h2>
                <p>{apiData.overview}</p>
                <div className="generos-container">
                    <ListGenres data={details.genres}/>
                </div>
                <YoutubeVideo videoData={props.videos}/>
                <Review reviews={props.reviews}/>
            </div>

            <div className="right-details-container">
                <div className="info-line">
                    <p className="titulo">Título Original: </p><p>{apiData.original_title}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Lançamento: </p><p> {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Estudios de Produção: </p><p>{apiData.production_companies()}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">País de Origem: </p><p>{apiData.production_countries()}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Idioma Original: </p><p>{details.original_language}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Duração: </p><p>{`${details.runtime}m`}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Site Oficial: </p><a href={details.homepage}><p>Acessar</p></a>
                </div>
            </div>
        </div>
    )
}

function YoutubeVideo(props) {
    try {
        let video = props.videoData.results[0]
        console.log(video);
        return (
            <Fragment>
                <iframe className="youtube-video" src={`https://www.youtube.com/embed/${video.key}`}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fragment>
        )
    } catch (error) {
        console.warn(error);
    }
}


function Review(props) {
    try {
        let review = props.reviews.results[0]
        console.log(review);

        return (
            <Fragment>
                <div className="review-container">
                    <div className="author-image">
                        <img src={apiFunctions.API_IMAGE_URL + review.author_details.avatar_path}/>
                    </div>
                    <div className="review-content">
                        <h4 className="author-name">{review.author}</h4>
                        <p className="review-text">{review.content}</p>
                    </div>
                </div>
            </Fragment>
        )
    } catch (error) {
        
    }
}