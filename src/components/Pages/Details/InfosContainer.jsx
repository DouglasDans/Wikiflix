import ListGenres from "./ListGenres";
import './InfosContainer.css'

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
