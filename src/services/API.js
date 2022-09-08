import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "pt-BR"
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w500/"
const API_PARAMS = {
    'api_key': API_KEY,
    'language': API_LANGUAGE,
    'region': 'BR'
}

const api = axios.create({
    baseURL: BASE_URL,
    region: 'BR'
})

const apiFunctions = {
    API_IMAGE_URL: API_IMAGE_URL,
    getDetails: (id) => {
        return api.get(`/movie/${id}`, { 
            params: { 
                'api_key': API_KEY,
                'language': API_LANGUAGE
            } 
        })
    },
    movie: {
        getWatchProviders: (id) => {
            return api.get(`/movie/${id}/watch/providers`, { 
                params: API_PARAMS
            })
        },
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
    tv: {

    }
}

export default apiFunctions










// export default function getPopularGames(){
//     fetch(API_URL + '/movie/popular?'+ API_KEY +'&'+ API_LANGUAGE +'&page=2').then(response => response.json()).then(data => {
//         console.log(data.results)
//         return data.results
//     })
// }