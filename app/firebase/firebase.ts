// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7RQrbPK_LMAEwjHZFg6EvPSoFIyuPnZw",
  authDomain: "ascend-about-page.firebaseapp.com",
  projectId: "ascend-about-page",
  storageBucket: "ascend-about-page.appspot.com",
  messagingSenderId: "311156488652",
  appId: "1:311156488652:web:6f224fd51afa6de1b28569",
  measurementId: "G-PXELVCF5SD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
