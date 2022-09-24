import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import apiFunctions from "../../../services/API";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";

export default function Details(){

    const {id} = useParams()
    const [details, setDetails] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);
    let genres = [{name: "Indisponível"}]

    useEffect(() => {
        apiFunctions.movie.getWatchProviders(id)
            .then((response) => {setWatchProviders(response.data.results.BR);console.log(response.data.results.BR);})
            .catch((err) => {console.error("ops! ocorreu um erro" + err);
        });
        apiFunctions.getDetails(id)
            .then((response) => {setDetails(response.data);console.log(response.data);})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[]);

    if (details.genres !== undefined) {
        genres = details.genres
    }
    
    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer />
                <Banner details={details} watchProviders={watchProviders} genres={genres} />
                <InfosContainer details={details}/>
            </main>
        </Fragment>
    )
}


