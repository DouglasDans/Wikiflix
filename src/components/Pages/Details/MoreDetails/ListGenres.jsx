import { Fragment } from "react"
import styles from './listGenres.module.css'

export default function ListGenres({details}){
    try {
        return (
            <div className={styles.genreContainer}>
                {details.genres.map((item) => {
                    return(
                        <span className={styles.genreSpan}>{item.name}</span>
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