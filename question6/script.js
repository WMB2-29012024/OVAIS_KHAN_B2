const loader = document.getElementById("loader");
const pElem = document.getElementById("p");
const button = document.getElementById("btn");

const API = "https://jsonplaceholder.typicode.com/photos";
async function finaldataFunction(API) {
  try {
    const res = await fetch(API);
    await res.json();
    pElem.innerText = "Data Fetched";
  } catch (error) {
    pElem.innerText = "Failed to faitch data";
    loader.display="block"
  }
}

button.addEventListener("click",function(){
pElem.innerHTML = `<div id="container">
<div id="loader"></div>
</div>`
finaldataFunction(API)
})