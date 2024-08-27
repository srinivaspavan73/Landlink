// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayGlfwi2jqv__vODFBAbEkqBYZfeLqHk",
  authDomain: "land-4c345.firebaseapp.com",
  projectId: "land-4c345",
  storageBucket: "land-4c345.appspot.com",
  messagingSenderId: "673137103381",
  appId: "1:673137103381:web:b6642c19b964ac489ff41c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
