import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEwRPCV46O9v74zEFSktgW7JMtO8HfcqM",
  authDomain: "user-email-password-5936f.firebaseapp.com",
  projectId: "user-email-password-5936f",
  storageBucket: "user-email-password-5936f.appspot.com",
  messagingSenderId: "913650145149",
  appId: "1:913650145149:web:00750769e27c89e7069e14"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;