import React, { Fragment, useEffect, useState } from "react"; 
import { useParams} from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import apiFunctions from "../../../services/API";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";
import Carousel from "../../Carousel";

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
        return (
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer />
                    <Banner details={this.state.details} watchProviders={this.state.watchProviders} linkVideo={this.state.videos}/>
                    <InfosContainer details={this.state.details} />
                    {/* <Recommendations recommendations={this.state.recommendations} dataType={this.state.typeContent.dataType} details={this.state.details}/> */}
                    {/* <Recommendations recommendations={this.state.similar} dataType={this.state.typeContent} details={this.state.details}/> */}
                </main>
            </Fragment>
        )
    }
}

export default getParams(Details)

function Recommendations(props){
    console.log(props);
    try {
        return(
            <Carousel itens={props.recommendations} dataType={props.dataType} title={'Recomendações para ' + props.details.title} coverType={'small'}/>
        )
    } catch (e){
        console.warn(e);
        return(
            <Fragment></Fragment>
        )
    }
}

