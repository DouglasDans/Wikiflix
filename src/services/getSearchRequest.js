import api from "./API";

async function getSearchRequest (query){
    let obj = {};

    const requests = [
        api.get(`search/movie?query=${query}`).then(res => obj.movieList = res.data.results),
        api.get(`search/tv?query=${query}`).then(res => obj.tvList = res.data.results)
    ]
    await Promise.all(requests);

    return obj
}

export default getSearchRequest