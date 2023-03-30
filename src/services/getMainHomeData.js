import api from "./API";

const requestList = {
    home: [
        [`/trending/all/week`, 'tendenciaSemana', true],
        [`/movie/now_playing`, 'movieAtualmenteCinemas'],
        [`/tv/on_the_air`, 'tvOnAir'],
        [`/movie/upcoming`, 'movieEmBreveCinemas'],
        [`/movie/top_rated`, 'movieTopRated'],
    ],
    movie: [
        [`/trending/movie/week`, 'tendenciaSemana'],
        [`/movie/now_playing`, 'movieAtualmenteCinemas'],
        [`/movie/popular`, 'moviePopular'],
        [`/movie/upcoming`, 'movieEmBreveCinemas'],
        [`/movie/top_rated`, 'movieTopRated'],
    ],
    tv: [
        [`/trending/tv/week`, 'tvPopular'],
        [`/tv/on_the_air`, 'tvOnAir'],
        [`/tv/latest`, 'tvLatest'],
        [`/tv/top_rated`, 'tvTopRated'],
    ]
}

async function getMainHomeData (page, apiRequests = requestList){
    let obj = {};

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