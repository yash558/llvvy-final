// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyArpIBcPwOpO8Y11j53o2PICAp7gEmJa0I",
    authDomain: "livvy-58a55.firebaseapp.com",
    projectId: "livvy-58a55",
    storageBucket: "livvy-58a55.appspot.com",
    messagingSenderId: "745831865661",
    appId: "1:745831865661:web:4bb4efee94d37926ce3954",
    databaseURL: "https://users.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
