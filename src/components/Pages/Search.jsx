import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";

export default function Search(){
    window.scrollTo(0, 0);
    
    const {promise} = useParams()

    console.log(promise);

    return(
        <Fragment>
            <Navbar/>
            <main className="container-main">
                <SearchContainer/>
            </main>
        </Fragment>
    )
}