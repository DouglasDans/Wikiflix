import { Fragment } from "react"

export default function ListGenres({details}){
    try {
        return (
            <div className="generos-container">
                {details.genres.map((item) => {
                    return(
                        <span>{item.name}</span>
                        )
                    })}
            </div>
        )
    } catch (error) {
        console.warn("[Warn - ListGenres - nenhum gênero renderizado]" + error);
        return(
            <Fragment></Fragment>
        )
    }
}