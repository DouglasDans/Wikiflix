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
    getSearchListMovie: async function(query){
        return await api.get(`search/movie?query=${query}`, { 
            params: API_PARAMS
        })
    },
    getSearchListTv: async function(query){
        return await api.get(`search/tv?query=${query}`, { 
            params: API_PARAMS
        })
    },

    getTendenciaSemana: async function(){
        return await api.get(`/trending/all/week`, { 
            params: API_PARAMS
        })
    },
    
    movie: {
        dataType: "movie",
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
        dataType: "tv",
        getDetails: async function(id){
            return await api.get(`/tv/${id}`, { 
                params: API_PARAMS
            })
        },
        getCredits: async function(id) {
            return await api.get(`/tv/${id}/credits`, { 
                params: API_PARAMS
            })
        },
        getAlternativeTitles: async function(id) {
            return await api.get(`/tv/${id}/alternative_titles`, { 
                params: API_PARAMS
            })
        },
        getContentRatings: async function(id) {
            return await api.get(`/tv/${id}/content_ratings`, { 
                params: API_PARAMS
            })
        },
        getExternalIds: async function(id) {
            return await api.get(`/tv/${id}/external_ids`, { 
                params: API_PARAMS
            })
        },
        getRecommendations: async function(id) {
            return await api.get(`/tv/${id}/recommendations`, { 
                params: API_PARAMS
            })
        },
        getReviews: async function(id) {
            return await api.get(`/tv/${id}/reviews`, { 
                params: API_PARAMS
            })
        },
        getSimilar: async function(id) {
            return await api.get(`/tv/${id}/similar`, { 
                params: API_PARAMS
            })
        },
        getTranslations: async function(id){
            return await api.get(`/tv/${id}/translations`, { 
                params: API_PARAMS
            })
        },
        getVideos: async function(id){
            return await api.get(`/tv/${id}/videos`, { 
                params: API_PARAMS
            })
        },
        getWatchProviders: async function(id) {
            return await api.get(`/tv/${id}/watch/providers`, { 
                params: API_PARAMS
            })
        },
        getTendenciaSemana: api.get("/trending/tv/week", { 
            params: API_PARAMS 
        }),
        getLatest: async function() {
            return await api.get(`/tv/latest`, { 
                params: API_PARAMS
            })
        },
        getOnAirToday: async function() {
            return await api.get(`/tv/airing_today`, { 
                params: API_PARAMS
            })
        },
        getOnAir: async function() {
            return await api.get(`/tv/on_the_air`, { 
                params: API_PARAMS
            })
        },
        getPopular: async function() {
            return await api.get(`/tv/popular`, { 
                params: API_PARAMS
            })
        },
        getTopRated: async function() {
            return await api.get(`/tv/top_rated`, { 
                params: API_PARAMS
            })
        },
    }
}

export default apiFunctions


