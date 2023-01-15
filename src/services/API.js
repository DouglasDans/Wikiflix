import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "pt-BR"
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w500/"
const API_PARAMS = {
    'api_key': API_KEY,
    'language': API_LANGUAGE,
    'adult': false,
    'region': 'BR'
}

const api = axios.create({
    baseURL: BASE_URL,
    region: 'BR'
})

const apiFunctions = {
    API_IMAGE_URL: API_IMAGE_URL,
    getSearchList: async function(query){
        return await api.get(`search/movie?query=${query}`, { 
            params: API_PARAMS
        })
    },
    
    movie: {
        getDetails: async function(id){
            return await api.get(`/movie/${id}`, { 
                params: API_PARAMS
            })
        },
        getAccountTitles: async function(id){
            return await api.get(`/movie/${id}/alternative_titles`, { 
                params: API_PARAMS
            })
        },
        getExternalIds: async function(id){
            return await api.get(`/movie/${id}/external_ids`, { 
                params: API_PARAMS
            })
        },
        getImages: async function(id){
            return await api.get(`/movie/${id}/images`, { 
                params: API_PARAMS
            })
        },
        getList: async function(id){
            return await api.get(`/movie/${id}/list`, { 
                params: API_PARAMS
            })
        },
        getRecommendations: async function(id){
            return await api.get(`/movie/${id}/recommendations`, { 
                params: API_PARAMS
            })
        },
        getReleaseDates: async function(id){
            return await api.get(`/movie/${id}/release_dates`, { 
                params: API_PARAMS
            })
        },
        getReviews: async function(id){
            return await api.get(`/movie/${id}/reviews`, { 
                params: API_PARAMS
            })
        },
        getSimilar: async function(id){
            return await api.get(`/movie/${id}/similar`, { 
                params: API_PARAMS
            })
        },
        getTranslations: async function(id){
            return await api.get(`/movie/${id}/translations`, { 
                params: API_PARAMS
            })
        },
        getVideos: async function(id){
            return await api.get(`/movie/${id}/videos`, { 
                params: API_PARAMS
            })
        },

        getWatchProviders: async function(id) {
            return await api.get(`/movie/${id}/watch/providers`, { 
                params: API_PARAMS
            })
        },
        getLatest: async function() {
            return await api.get(`/movie/latest`, { 
                params: API_PARAMS
            })
        },
        getTendenciaSemana: api.get("/trending/movie/week", { 
            params: API_PARAMS 
        }),
        getPopularMovies: api.get("/movie/popular", { 
            params: API_PARAMS 
        }),
        getFilmesEmBreve: api.get("/movie/upcoming", { 
            params: API_PARAMS
        }),
        getFilmesMelhoresAvaliados: api.get("/movie/top_rated", { 
            params: API_PARAMS
        }),
        getFilmesNosCinemas: api.get("/movie/now_playing", { 
            params: API_PARAMS
        }),
    },

    tv: {
        getDetails: async function(id){
            return await api.get(`/tv/${id}`, { 
                params: API_PARAMS
            })
        },
        getWatchProviders: async function(id) {
            return await api.get(`/tv/${id}/watch/providers`, { 
                params: API_PARAMS
            })
        },
    }
}

export default apiFunctions










// export default function getPopularGames(){
//     fetch(API_URL + '/movie/popular?'+ API_KEY +'&'+ API_LANGUAGE +'&page=2').then(response => response.json()).then(data => {
//         console.log(data.results)
//         return data.results
//     })
// }