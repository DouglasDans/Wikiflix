import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../Carousel";
import Navbar from "../Navbar";
import SearchContainer from "../SearchContainer";

function Home(){
    // useState
    const [movies, setMovies] = useState([])

    //useEffect - Serve para lidar com os efeitos colaterais de usar dados externos como uma api

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2b22702bf9dc45986d22dd21add08ec7&language=pr-BR&page=1').then(response => response.json()).then(data => console.log(data))
    },[]);

    return(
        <Fragment>
            <Navbar />
            <main className="container-main">
                <SearchContainer/>
                <Carousel/>

                {movies.map(movie => {
                    return(
                        <div>ss</div>
                    )
                })}
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