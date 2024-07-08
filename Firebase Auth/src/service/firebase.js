// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-buSOdvKSvjgY_ivRZemdepYyuqCbuk",
  authDomain: "emailpassword-d8813.firebaseapp.com",
  projectId: "emailpassword-d8813",
  storageBucket: "emailpassword-d8813.appspot.com",
  messagingSenderId: "406974554338",
  appId: "1:406974554338:web:5cb7288cc6240e048c7ebb",
  measurementId: "G-8W2F98MTG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth =getAuth(app)