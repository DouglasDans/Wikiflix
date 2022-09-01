import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "pt-BR"

const api = axios.create({
    baseURL: BASE_URL
})

const apiFunctions = {
    getPopularMovies: api.get("/discover/movie", { 
        params: { 
            'api_key': API_KEY,
            'language': API_LANGUAGE,
            "release_date.lte": Date.now() - 100000,
        } 
    }),
    getFilmesBRPopulares: api.get("/movie/popular", { 
        params: { 
            api_key: API_KEY,
            language: API_LANGUAGE
        } 
    }),
    getFilmesCartaz: api.get("/movie/popular", { 
        params: { 
            api_key: API_KEY,
            language: API_LANGUAGE
        } 
    }),
    
}

export default apiFunctions











// export default function getPopularGames(){
//     fetch(API_URL + '/movie/popular?'+ API_KEY +'&'+ API_LANGUAGE +'&page=2').then(response => response.json()).then(data => {
//         console.log(data.results)
//         return data.results
//     })
// }