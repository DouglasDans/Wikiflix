import ListGenres from "./ListGenres";
import './InfosContainer.css'

export default function InfosContainer(props){
    const details = props.details
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

            </div>

        </div>
    )
}