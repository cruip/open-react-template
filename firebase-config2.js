import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnUgvXSGkBcVnfpDFKQmilUN0HhA7ZNNM",
  authDomain: "podify-1b981.firebaseapp.com",
  databaseURL: "https://podify-1b981-default-rtdb.firebaseio.com",
  projectId: "podify-1b981",
  storageBucket: "podify-1b981.appspot.com",
  messagingSenderId: "241850500435",
  appId: "1:241850500435:web:a5b9924b8e6df772584da6",
  measurementId: "G-55SR2L1NPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
const analytics = getAnalytics(app);