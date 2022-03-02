async function getRequest(url){

     await fetch(url).then((res) => {console.log(res.json())} );
    // let getData = await fetch(url).then((res) => {return res.json() });
    // console.log(getData)
    // return getData;
}

const response = {getRequest}
export default response;
