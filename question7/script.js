const loader = document.getElementById("loader");
const pElem = document.getElementById("div");
const button = document.getElementById("btn");
const ul = document.getElementById("ul");

const API = "https://jsonplaceholder.typicode.com/todos";
async function finaldataFunction(API) {
  try {
    const res = await fetch(API);
    const data = await res.json();
    
    data.forEach(element => {
    const elData = element.title;
    console.log(elData);

    const li = document.createElement("li")  
    li.innerText = elData;

    ul.appendChild(li);

    });
  } catch (error) {
    pElem.innerText = "Failed to faitch data";
  }
}

button.addEventListener("click",function(){
// pElem.innerHTML = `<div id="container">
// <div id="loader"></div>
// </div>`
finaldataFunction(API)
})