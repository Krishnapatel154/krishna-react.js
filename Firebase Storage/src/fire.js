// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGHzNlk-RIML12w4lo-TaIJ9MJLdDjmNA",
  authDomain: "storage-870e3.firebaseapp.com",
  projectId: "storage-870e3",
  storageBucket: "storage-870e3.appspot.com",
  messagingSenderId: "714889125855",
  appId: "1:714889125855:web:7a9fe5ab1ac33c2a0dee6a",
  measurementId: "G-QT641KLDCG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };