import { onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";




onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
        window.location = 'signup.html'
    }
  });


  const logout = document.querySelector('#logout-btn')
  logout.addEventListener('click' , ()=>{
signOut(auth).then(() => {
  console.log('Sign out successfully');
  window.location = 'signup.html'
}).catch((error) => {
console.log(error);
});
  })