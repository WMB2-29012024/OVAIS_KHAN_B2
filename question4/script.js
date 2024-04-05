const male = document.getElementById("male-btn");
const female = document.getElementById("female-btn");
const pElem = document.getElementById("p-elem");
const form = document.getElementById("formElem");
const div = document.getElementById("div");
const button = document.getElementById("button");

div.addEventListener("click",function(e){
    e.preventDefault()
    pElem.innerText = e.target.value;
 
})

form.addEventListener(submit,function(){
e.preventDefault()

})