import apiFunctions from "../../../services/API";

export default function WatchProviders(props){
    let watchProviders = props.data
    if (watchProviders === undefined || watchProviders.length === 0) {
        return(
            <small>Indiponível</small>
        )
    } else {
        return (
            watchProviders.flatrate.map((item) => {
                return(
                    <img  src={apiFunctions.API_IMAGE_URL + item.logo_path}/>
                )
            })
        )
    }    
}