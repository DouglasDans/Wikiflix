import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";
import apiFunctions from "../../services/API";
import "./Details.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
 class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = { id : props.params.id };
    }
    
    async componentDidMount() {
        const id = this.state.id
        console.log(id);

        await apiFunctions.movie.getWatchProviders(id)
            .then((response) => {
                this.setState({ watchProviders: response.data.results.BR });
                console.log(response.data.results.BR);
            })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        
        await apiFunctions.getDetails(id)
        .then((response) => {
            this.setState({ details: response.data });
            console.log(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        

        const date = new Date(this.state.details.release_date)

        console.log(date);
        console.log(this.state);
    }

    render(){
        return(
            <Fragment>
                            {console.log(this.state.details.backdrop_path)}
                <Navbar />
                <main className="container-main">
                    <SearchContainer />
                    <div className="container-banner">
                        <div className="bg-img-banner">
                            <img src={apiFunctions.API_IMAGE_URL + this.state.details.backdrop_path} />
                        </div>
                        <div className="gradient-banner"></div>
                        <div className="container-details-banner">
                            <button onClick={"s"} className="button-voltar">
                                <span class="material-symbols-rounded">
                                    arrow_back
                                </span>
                                Voltar
                            </button>
                            <div className="container-details-info">
                                <div className="top-container">
                                    <div className="left-container">
                                        <img src={apiFunctions.API_IMAGE_URL + this.state.details.poster_path}/>
                                    </div>
                                    <div className="right-container">
                                        <div className="info-title">
                                            <h1>{this.state.details.title}</h1>
                                            <div>
                                                <span>{"date.getFullYear()"}</span>
                                                &bull;
                                                <span>{this.state.details.runtime + " Minutos"}</span>
                                            </div>
                                        </div>
                                        <div className="streaming-container">
                                            <span>Disponivel em</span>
                                            {/* <WatchProviders/> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-container">
                                    <div className="action-buttons-container">
                                        
                                    </div>
                                    <div className="infos-icon-container">
                                        <div className="info-icon">
                                            <div>{this.state.details.vote_average}<span class="material-symbols-rounded">star</span></div>
                                            <small>{this.state.details.vote_count} avaliações</small>
                                        </div>
                                        <div className="info-icon">
                                            <div>12</div>
                                            <small>Classificação</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <div className="left-details-container">
                            <h2>{this.state.details.tagline}</h2>
                            <p>{this.state.details.overview}</p>
                            <div className="generos-container">
                                
                            </div>
                        </div>
                        <div className="right-details-container">

                        </div>

                    </div>
                </main>
            </Fragment>
        )
    }
}


export default withParams(Details)