import React, { Fragment, useRef } from "react";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


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


