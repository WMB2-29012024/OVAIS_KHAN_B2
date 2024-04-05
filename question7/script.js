const mode = document.getElementById("Mode");
const container = document.getElementById("container");

mode.addEventListener("change", function(e){

    if(e.target.value="black"){
    container.style.backgroundColor = "white";
}else{
    container.style.backgroundColor= "black";

}
});