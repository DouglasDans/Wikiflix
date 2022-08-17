import React, { Fragment, useState, useEffect } from "react";
import fetchPopularGames from "../../APIrequests";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";

function Home(){
    // useState
    const [movies, setMovies] = useState([])

    //useEffect - Serve para lidar com os efeitos colaterais de usar dados externos como uma api

    useEffect(() => {
        fetchPopularGames()
    },[]);

    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <div className="home-container">
                    <Carousel/>
                    {movies.map(movie => {
                        return(
                            <div>ss</div>
                        )
                    })}
                </div>

                
            </main>
        </Fragment>
    )
}

export default Home


// class Home extends React.Component{
//     render(){
//         return(
//             <Fragment>
//                 <Navbar />
//                 <main className="container-main">
//                     <SearchContainer/>
//                 </main>
//             </Fragment>
//         )
//     }
// }

// export default Home