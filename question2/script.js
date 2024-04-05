const inputElem = document.getElementById("input");
const inputElem2 = document.getElementById("input2");
const button = document.getElementById("btn");
const form = document.getElementById("formElem");
const pElem = document.getElementById("p-elem");



form.addEventListener("submit", function (e) {
    e.preventDefault()
    const sum = Number(inputElem.value) + Number(inputElem2.value)
    pElem.innerHTML= sum;
    
});
