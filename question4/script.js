const pElem = document.getElementById("p");

const API = "https://jsonplaceholder.typicode.com/photos";
async function finaldataFunction(API) {
  try {
    const res = await fetch(API);
    await res.json();
    pElem.innerText = "Data fetch";
  } catch (error) {
    pElem.innerText = "Failed to faitch data";
  }
}
finaldataFunction(API);
