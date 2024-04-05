function getDataPromise(API){
    return new Promise((res, rej) => {
   fetch(API)
   .then(data =>data.json())
   .then(jsonData=> res(jsonData))
    })
}
const API = "";
getDataPromise(API)
.then(res=> console.log(res))