// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDd5Cka3K56IIhP1opW61KSt-xNv5gsay0",

  authDomain: "findem-3b3a3.firebaseapp.com",

  projectId: "findem-3b3a3",

  storageBucket: "findem-3b3a3.appspot.com",

  messagingSenderId: "680712230026",

  appId: "1:680712230026:web:6a8567c17565b6335e4973"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}