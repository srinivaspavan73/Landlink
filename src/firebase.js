// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPQPrGuxReK93bv7MmsW7FzqJvwmvVAjY",
  authDomain: "land-link.firebaseapp.com",
  projectId: "land-link",
  storageBucket: "land-link.appspot.com",
  messagingSenderId: "144887781694",
  appId: "1:144887781694:web:330f47a7c23dbb1479746f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
