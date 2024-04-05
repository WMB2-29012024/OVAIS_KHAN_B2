const fruits = document.getElementById("fruits");
const pElem = document.getElementById("p-elem");


fruits.addEventListener("change",function(){
  pElem.innerText = fruits.value;
})