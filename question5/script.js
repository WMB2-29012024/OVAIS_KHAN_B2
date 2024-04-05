const pElem = document.getElementById("p-elem");
const pElem1 = document.getElementById("p-elem1");
const pElem2 = document.getElementById("p-elem2");
const inputElem = document.getElementById("input");
const submit = document.getElementById("submit");


inputElem.addEventListener("change",function(e){

// console.log(e.target.files[0])
// pElem.innerText = e.target.files[0].name;
// pElem1.innerText = e.target.files[0].size/100000;
// pElem2.innerText = e.target.files[0].type;

const fileList =e.target.files
const fileListMap =[]
const listElem =document.createElement('ol')

for (const file of fileList){
    const filesData =`
    <li id= ${file.name}>
        <p>name: ${file.name}</p>
        <p>size:'${(file.size /10*6).toFixed(2)}MB'</p>
        <p>type:${file.type}</p>
}
    fileListMap.push(filesData)
}


})