import firebase from 'firebase/app'; // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Axios from 'axios';

// Initialize Firebase
let config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "emails-138ac",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }