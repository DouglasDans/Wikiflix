import React, { Fragment } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";

export default class Series extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer/>
                </main>
            </Fragment>
        )
    }
}