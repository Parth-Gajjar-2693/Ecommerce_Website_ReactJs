// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnIsBHoeZX_WYSlwK1uqJnDS0mT6ESFuE",
  authDomain: "login-db96f.firebaseapp.com",
  projectId: "login-db96f",
  storageBucket: "login-db96f.appspot.com",
  messagingSenderId: "790238449003",
  appId: "1:790238449003:web:bfc22b4a56f14b1968d02e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
