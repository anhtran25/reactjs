// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Kux8KxgWfX67xh3CRUO1dukm_51OraQ",
  authDomain: "anhttph13025-63329.firebaseapp.com",
  projectId: "anhttph13025-63329",
  storageBucket: "anhttph13025-63329.appspot.com",
  messagingSenderId: "305766905456",
  appId: "1:305766905456:web:fa0b0393e6efc4b659a6b5",
  measurementId: "G-N0B88TS43Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();