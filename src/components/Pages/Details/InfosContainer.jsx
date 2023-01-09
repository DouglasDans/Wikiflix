import ListGenres from "./ListGenres";
import './InfosContainer.css'

export default function InfosContainer(props){
    const details = props.details
    const date = new Date(details.release_date)

    const paisesOrigem = () => {
        if (details.production_countries === undefined) {
            return "Indisponível"
        } else {
            let data = []
            details.production_countries.map((item) => {
                data.push(item.name)
            })
            return data.toString()
        }
    }
    const procuctionCompanies = () => {
        if (details.production_companies === undefined) {
            return "Indisponível"
        } else {
            let data = []
            details.production_companies.map((item) => {
                data.push(item.name)
            })
            return data.toString()
        }
    }

    return (
        <div className="details-container">
            <div className="left-details-container">
                <h2>{details.tagline}</h2>
                <p>{details.overview}</p>
                <div className="generos-container">
                    <ListGenres data={details.genres}/>
                </div>
            </div>
            <div className="right-details-container">
                <div className="info-line">
                    <p className="titulo">Título: </p><p>{details.title}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Título Original: </p><p>{details.original_title}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Lançamento: </p><p> {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">Estudios de Produção: </p><p>{procuctionCompanies()}</p>
                </div>
                <div className="info-line">
                    <p className="titulo">País de Origem: </p><p>{paisesOrigem()}</p>
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
