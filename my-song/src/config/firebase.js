// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5IaAAaB1OIbeT9EsQFElgMgSV-jXT2JM",
  authDomain: "playlist-45472.firebaseapp.com",
  projectId: "playlist-45472",
  storageBucket: "playlist-45472.appspot.com",
  messagingSenderId: "455756892123",
  appId: "1:455756892123:web:1a01f08d07a1e8775cc9fe",
  measurementId: "G-T5VBBEJ605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);