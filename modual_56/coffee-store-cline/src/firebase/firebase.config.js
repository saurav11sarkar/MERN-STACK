import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyv4GHB7IsKHhFiotNRhhB6dbeqztwM8",
  authDomain: "coffee-store-199ef.firebaseapp.com",
  projectId: "coffee-store-199ef",
  storageBucket: "coffee-store-199ef.appspot.com",
  messagingSenderId: "909097521303",
  appId: "1:909097521303:web:afff00aab76958b03759d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;