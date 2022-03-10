async function getRequest(url){
    const getData  = await fetch(url).then((res) => res.json()).then(data => data);
    return getData
}
const response = {getRequest}
export default response;
