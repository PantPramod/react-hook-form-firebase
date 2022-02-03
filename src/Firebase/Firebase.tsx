// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuEgOssL2FnX6I8FNjcMpJ2CMNqNVJ-JI",
    authDomain: "react-hook-form-3a93d.firebaseapp.com",
    databaseURL: "https://react-hook-form-3a93d-default-rtdb.firebaseio.com/",
    projectId: "react-hook-form-3a93d",
    storageBucket: "react-hook-form-3a93d.appspot.com",
    messagingSenderId: "150698195937",
    appId: "1:150698195937:web:5774ce6c1f6496d83eb0a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };