import { Fragment } from "react"

export default function ListGenres(props){
    let genres = props.data
    try {
        return (
            genres.map((item) => {
                return(
                    <span>{item.name}</span>
                )
            })
        )
    } catch (error) {
        return(
            <Fragment></Fragment>
        )
    }
}