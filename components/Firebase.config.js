// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5ConzFDM2yGvweN-sZdAPFAlowyCDhE",
  authDomain: "reactmoviepp.firebaseapp.com",
  projectId: "reactmoviepp",
  storageBucket: "reactmoviepp.appspot.com",
  messagingSenderId: "719848561957",
  appId: "1:719848561957:web:254facecfb591921474ecc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);