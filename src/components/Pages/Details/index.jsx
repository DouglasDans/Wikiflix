import React, { Fragment, useEffect, useState } from "react"; 
import { useParams} from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import apiFunctions from "../../../services/API";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";
import MediaSlider from "../../Sliders/MediaSlider";

function getParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

 class Details extends React.Component{
    state = {
        id: this.props.params.id,
        typeContent: 0,
        details: "null",
        videos: "null",
        similar: "null",
        watchProviders: "null",
        recommendations: "null",
    }
    
    componentDidMount() {
        let typeContent = 0

        if(window.location.pathname.includes("/movie")){
            typeContent = apiFunctions.movie
        } else if(window.location.pathname.includes("/tv")){
            typeContent = apiFunctions.tv
        }else {
            alert("opaaaaa")
        }


        typeContent.getDetails(this.state.id).then((response) => {
            this.setState({details:response.data})
        })
        typeContent.getVideos(this.state.id).then((response) => {
            this.setState({videos:response.data})
        })
        typeContent.getSimilar(this.state.id).then((response) => {
            this.setState({similar:response.data})
        })
        typeContent.getWatchProviders(this.state.id).then((response) => {
            this.setState({watchProviders:response.data})
        })
        typeContent.getRecommendations(this.state.id).then((response) => {
            this.setState({recommendations:response.data})
        })

        this.setState({typeContent: typeContent})
    }
    
    componentDidUpdate(){
        window.scrollTo(0, 0);
    }
    
    render(){
        console.log(this.state);
        console.log(this.state.similar)
        return (
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer />
                    <Banner details={this.state.details} watchProviders={this.state.watchProviders} linkVideo={this.state.videos}/>
                    <InfosContainer details={this.state.details} />
                    <MediaSlider itens={this.state.recommendations.results} title={"Recomendações para " + (this.state.details.title || this.state.details.name)} coverSize={'small'}/>
                    <MediaSlider itens={this.state.similar.results} title={"Resultados similares"} coverSize={'small'}/>
                </main>
            </Fragment>
        )
    }
}

export default getParams(Details)

