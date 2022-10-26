import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (( auth, email, password) =>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
  


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

});


const signIn = ((auth, email, password) =>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    // ...

    alert("Signed up successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage)
    // ..
  });

});




export {signIn, SignUp}