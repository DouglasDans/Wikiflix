import { Fragment } from "react";
import apiFunctions from "../../../services/API";

export default function WatchProviders(props){
    let watchProviders = props.data

    try {
        if (watchProviders.flatrate === undefined) {
            return(
                <Fragment>
                <div className="streaming-container">
                    <span>Disponível para comprar e/ou alugar</span>
                </div>
                <div></div>

                </Fragment>
            )
        } else {
            return (
                <div className="streaming-container">
                    <span>Disponível em</span>
                    <div className="streaming-icons-container">
                    {
                        watchProviders.flatrate.map((item) => {
                            if (item.display_priority < 30) {
                                return(
                                    <img  src={"https://image.tmdb.org/t/p/w500/" + item.logo_path}/>
                                )
                            }
                        })
                    }
                    </div>
                </div>
            )
        }
    } catch (e) {
        return(
            <Fragment>
                <div className="streaming-container">
                    <span>Indisponível online</span>
                </div>
                <div></div>
            </Fragment>
        )
    }
}