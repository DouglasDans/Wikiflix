import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "pt-BR"

const API_PARAMS = {
    'api_key': API_KEY,
    'language': API_LANGUAGE,
    'adult': false,
    'region': 'BR'
}

const api = axios.create({
    baseURL: BASE_URL,
    params: API_PARAMS
})

export default api
