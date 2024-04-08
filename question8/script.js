const loader = document.getElementById("loader");
const pElem = document.getElementById("div");
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const ul = document.getElementById("ul");

 let count = 1;
 const API = (count) => `https://jsonplaceholder.typicode.com/todos/${count}`;

 button.addEventListener("click",async function(){
    count -= 1
    let data;

    try {
      const res = await fetch(API(count));
      data = await res.json();
      
      console.log(data);
  
    } catch (error) {
      pElem.innerText = "Failed to faitch data";
    }

    console.log(finaldataFunction(API(count)))

    const li = document.createElement("li")  
    li.innerText = data.title;

    ul.appendChild(li);
 })

 button2.addEventListener("click", async function(){
    count += 1

    let data;

    try {
      const res = await fetch(API(count));
      data = await res.json();
      
      console.log(data);
  
    } catch (error) {
      pElem.innerText = "Failed to faitch data";
    }

    console.log(finaldataFunction(API(count)))

    const li = document.createElement("li")  
    li.innerText = data.title;

    ul.appendChild(li);

 })
