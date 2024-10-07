// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChiFHhgzQOVRuVQyHR1EkL8Y6VK68nLrg",
  authDomain: "react-recape.firebaseapp.com",
  projectId: "react-recape",
  storageBucket: "react-recape.appspot.com",
  messagingSenderId: "20021641809",
  appId: "1:20021641809:web:69336ebab6e422e5986e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;