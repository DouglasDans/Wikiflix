import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import "./Details.css"

export default function Details(){

    const {id} = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        apiFunctions.getDetails(id)
            .then((response) => {setDetails(response.data)})
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer />
                <div className="container-banner">
                    
                </div>
            </main>
        </Fragment>
    )
}