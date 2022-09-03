import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "pt-BR"

const api = axios.create({
    baseURL: BASE_URL,
    region: 'BR'
})

const apiFunctions = {
    getDetails: (id) => {
        return api.get(`/movie/${id}`, { 
            params: { 
                'api_key': API_KEY,
                'language': API_LANGUAGE
            } 
        })
    },
    apiMovieFunctions: {
        getTendenciaSemana: api.get("/trending/movie/week", { 
            params: { 
                'api_key': API_KEY,
                'language': API_LANGUAGE
            } 
        }),
        getPopularMovies: api.get("/discover/movie", { 
            params: { 
                'api_key': API_KEY,
                'language': API_LANGUAGE
            } 
        }),
        getFilmesEmBreve: api.get("/movie/upcoming", { 
            params: { 
                api_key: API_KEY,
                language: API_LANGUAGE,
                region: 'BR'
            } 
        }),
        getFilmesMelhoresAvaliados: api.get("/movie/top_rated", { 
            params: { 
                api_key: API_KEY,
                language: API_LANGUAGE,
                
            } 
        }),
        getFilmesNosCinemas: api.get("/movie/now_playing", { 
            params: { 
                api_key: API_KEY,
                language: API_LANGUAGE,
                region: 'BR'
            } 
        }),
    },
    apiTVFunctions: {

    }
}

export default apiFunctions










// export default function getPopularGames(){
//     fetch(API_URL + '/movie/popular?'+ API_KEY +'&'+ API_LANGUAGE +'&page=2').then(response => response.json()).then(data => {
//         console.log(data.results)
//         return data.results
//     })
// }