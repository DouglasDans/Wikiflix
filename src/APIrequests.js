

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=2b22702bf9dc45986d22dd21add08ec7"
const API_LANGUAGE = "language=pt-BR"


export default function getPopularGames(){
    fetch(API_URL + '/movie/popular?'+ API_KEY +'&'+ API_LANGUAGE +'&page=2').then(response => response.json()).then(data => {
        console.log(data.results)
        return data.results
    })
}