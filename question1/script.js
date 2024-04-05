const inputElem = document.getElementById("input");
const pElem = document.getElementById("p-elem");

inputElem.addEventListener("keyup", function (){
pElem.innerText = inputElem.value

})