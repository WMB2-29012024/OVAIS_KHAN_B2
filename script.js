const  inputText = document.getElementById("input-txt");
const  inputEmail = document.getElementById("input-email");
const  form = document.getElementById("form-elem");
const  password1 = document.getElementById("input-password");
const  password2 = document.getElementById("input-password-confirm");
const  pElem = document.getElementsByTagName("p")



form.addEventListener('submit',(event)=>{
   event.preventDefault();
   console.log("Full name",inputText.value);
   console.log("Email",inputEmail.value);

   if(password1.value == password2.value){
    window.alert("form submitted")
   }else{
   pElem[0].innerText = "password does not match";
   }
});
