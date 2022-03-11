// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOLyFt63QqwOW-IIcbcaf4NRNT1q9Yobk",
  authDomain: "aqindex-f68b2.firebaseapp.com",
  projectId: "aqindex-f68b2",
  storageBucket: "aqindex-f68b2.appspot.com",
  messagingSenderId: "278074377824",
  appId: "1:278074377824:web:2a014a04fcb22d3cb56505",
  measurementId: "G-ZRRFDEZ0TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);