import React, { Fragment, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import SearchContainer from "../../SearchContainer";
import InfosContainer from "./InfosContainer";
import MediaSlider from "../../Sliders/MediaSlider";
import Footer from "../../Footer";
import getDetails from "../../../services/getDetailsData";
import Banner from "./Banner/Banner";

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
        setLoading(true)
        async function getData() {
            getDetails(id, typeContent).then(res => {setAPIData(res);setLoading(false)})
        }
        getData()
    },[id]);
    
    if (loading) {
        return(
            <Fragment>
                <Navbar />
                <main className="container-loading">
                    <img src="/img/compact_wikiflix_logo.png" height={"50px"}/>
                    {/* <h4>Carregando...</h4> */}
                </main>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Navbar />
                <main className="container-main">
                    <SearchContainer />
                    <Banner {...apiData}/>
                    <InfosContainer apiData={apiData} typeContent={apiData.typeContent} />
                    <MediaSlider itens={apiData.recommendations.results} title={"Recomendações para " + (apiData.details.title || apiData.details.name)} coverSize={'small'}/>
                    <MediaSlider itens={apiData.similar.results} title={"Resultados similares"} coverSize={'small'}/>
    
                    <Footer/>
                </main>
            </Fragment>
        )
        
    }

}
export default Details

