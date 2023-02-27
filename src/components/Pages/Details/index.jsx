import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import Banner from "./Banner"
import InfosContainer from "./InfosContainer";
import MediaSlider from "../../Sliders/MediaSlider";
import Footer from "../../Footer";
import getDetails from "../../../services/getDetailsData";

function Details(){
    window.scrollTo(0, 0);

    let typeContent = 0

    if(window.location.pathname.includes("/movie")){
        typeContent = "movie"
    } else if(window.location.pathname.includes("/tv")){
        typeContent = "tv"
    }
    
    const {id} = useParams() 
    
    const [apiData, setAPIData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            getDetails(id, typeContent).then(res => {setAPIData(res);setLoading(false)})
        }
        getData()
    },[id]);

    if (loading) {
        return("loading")
    } else {
        console.log(apiData.contentRatings);
        return (
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer />
                    <Banner details={apiData.details} watchProviders={apiData.watchProviders.results.BR} typeContent={apiData.typeContent} ratings={apiData.contentRatings.results}/>
                    <InfosContainer details={apiData.details} videos={apiData.videos} reviews={apiData.reviews.results} typeContent={apiData.typeContent}/>
                    <MediaSlider itens={apiData.recommendations.results} title={"Recomendações para " + (apiData.details.title || apiData.details.name)} coverSize={'small'}/>
                    <MediaSlider itens={apiData.similar.results} title={"Resultados similares"} coverSize={'small'}/>
    
                    <Footer/>
                </main>
            </Fragment>
        )
        
    }

}
export default Details

