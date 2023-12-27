import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf9Oo0B2kc_6aHQibtbMUzgtDS8QXBH-0",
  authDomain: "tunedin-c2d4f.firebaseapp.com",
  projectId: "tunedin-c2d4f",
  storageBucket: "tunedin-c2d4f.appspot.com",
  messagingSenderId: "370440719371",
  appId: "1:370440719371:web:281850b28c6f4b0adc0b0e",
  measurementId: "G-KP0NKJPN57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "main");
const db = getFirestore(app)
export {db}
const analytics = getAnalytics(app);