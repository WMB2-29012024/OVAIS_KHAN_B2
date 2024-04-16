const submit = document.getElementsByTagName("submit");


let API = "https://jsonplaceholder.typicode.com/posts?userId={userID}"

submit.addEventListeener("change", async function(API){
try{
let res = await fetch (API);
let data = await res.json();
console.log(data);

}
catch(err){
    console.log("Error found")
}

})
