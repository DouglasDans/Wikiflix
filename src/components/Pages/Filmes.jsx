import React, { Fragment } from "react";
import Navbar from "../Navbar";

class Filmes extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <img src={'https://64.media.tumblr.com/43466c0b9d9cc32c14a44583f165b8c2/3a10096ac39ab6d4-3f/s500x750/30475e44c7c48c86415790e33f49781ad9dbb499.gifv'} height='324px' />
                </main>
            </Fragment>
        )
    }
}

export default Filmes