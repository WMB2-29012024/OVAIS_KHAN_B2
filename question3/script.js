const button = document.getElementById("btn");

button.addEventListener("click", function () {
  async function getDataPromise(API) {
    const data = await fetch(API);
    const jsonData = await data.json();
    return jsonData;
  }

  const API = "https://jsonplaceholder.typicode.com/photos";
  async function finaldataFunction(API) {
    const res = await getDataPromise(API);
    console.log(res);
  }
  finaldataFunction(API);
});
