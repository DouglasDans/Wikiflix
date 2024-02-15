import ApiHandler from "./ApiHandler";


const DATA_KEYS = {
    TRENDING: 'tendenciaSemana',
    NOW_PLAYING: 'movieAtualmenteCinemas',
    UPCOMING: 'movieEmBreveCinemas',
    TOP_RATED: 'movieTopRated',
    POPULAR: 'moviePopular',
    TV_POPULAR: 'tvPopular',
    TV_ON_AIR: 'tvOnAir',
    TV_LATEST: 'tvLatest',
    TV_TOP_RATED: 'tvTopRated',
};

const requestList = {
    home: [
        [`/trending/all/week`, DATA_KEYS.TRENDING, true],
        [`/movie/now_playing`, DATA_KEYS.NOW_PLAYING],
        [`/tv/on_the_air`, DATA_KEYS.TV_ON_AIR],
        [`/movie/upcoming`, DATA_KEYS.UPCOMING],
        [`/movie/top_rated`, DATA_KEYS.TOP_RATED],
    ],
    movie: [
        [`/trending/movie/week`, DATA_KEYS.TRENDING],
        [`/movie/now_playing`, DATA_KEYS.NOW_PLAYING],
        [`/movie/popular`, DATA_KEYS.POPULAR],
        [`/movie/upcoming`, DATA_KEYS.UPCOMING],
        [`/movie/top_rated`, DATA_KEYS.TOP_RATED],
    ],
    tv: [
        [`/trending/tv/week`, DATA_KEYS.TV_POPULAR],
        [`/tv/on_the_air`, DATA_KEYS.TV_ON_AIR],
        [`/tv/latest`, DATA_KEYS.TV_LATEST],
        [`/tv/top_rated`, DATA_KEYS.TV_TOP_RATED],
    ]
};



async function getMainHomeData (page, apiRequests = requestList){
    let obj = {};

    const api = new ApiHandler().use()

    const requests = apiRequests[page].map(item => {
        if (item[2] === true) {
            return api.get(item[0]).then(res => {
                obj[item[1]] = res.data.results;
                const detailsRequests = obj[item[1]].map(data => {
                    return api.get(`/${data.media_type}/${data.id}`).then(res => data.details = res.data);
                });
                return Promise.all(detailsRequests).then(() => {
                    return obj;
                });
            });
        } 
        return api.get(item[0]).then(res => {obj[item[1]] = res.data.results;});
    })
    await Promise.all(requests);
    return obj
}

export default getMainHomeData