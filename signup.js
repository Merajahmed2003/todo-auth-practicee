import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";




const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const form = document.querySelector("form");

form.addEventListener('submit' ,(e)=>{
e.preventDefault(e)

createUserWithEmailAndPassword(auth, email.value, pass.value)
.then((userCredential) => {
  // Signed up
  const user = userCredential.user;
  console.log(user);
  console.log(email.value);
  console.log(pass.value);
  

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
});



})
