import api from "./API";

const requestList = [
    ['', 'details'],
    ['/credits', 'credits'],
    ['/alternative_titles', 'alternativeTitles'],
    ['/content_ratings', 'contentRatings'],
    ['/external_ids', 'externalIds'],
    ['/recommendations', 'recommendations'],
    ['/reviews', 'reviews'],
    ['/similar', 'similar'],
    ['/translations', 'translations'],
    ['/videos', 'videos'],
    ['/watch/providers', 'watchProviders'],
]

async function  getDetails (id, typeContent, apiRequests = requestList){
    const obj = {};
    
    obj.id = id;
    obj.typeContent = typeContent

    const requests = apiRequests.map(item => {
        return api.get(`/${typeContent}/${id}${item[0]}`)
        .then(res => {
            obj[item[1]] = res.data;
        }).catch(e => {
            console.warn(`TypeData: ${typeContent}; item: ${item[1]} ; Error: ${e}`);
        });
    });
    await Promise.all(requests);

    return obj
}

export default getDetails