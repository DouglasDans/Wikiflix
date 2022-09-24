import { Fragment } from "react"

export default function ListGenres(props){
    let genres = props.data
    if (genres === undefined) {
        return(
            <Fragment></Fragment>
        )
    } else {
        return (
            genres.map((item) => {
                return(
                    <span>{item.name}</span>
                )
            })
        )
    } 
}