// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8_ozaAuPbO2h5_jaKvI_vyZNLaSy53I0",
  authDomain: "login-648b5.firebaseapp.com",
  projectId: "login-648b5",
  storageBucket: "login-648b5.appspot.com",
  messagingSenderId: "736930627495",
  appId: "1:736930627495:web:5f17e8d1e47644f09c4082",
  measurementId: "G-HS28N9J4HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =getAuth(app)
 export const provider = new GoogleAuthProvider();