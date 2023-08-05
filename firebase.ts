// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh5JPxRHufZVQZqN8ZUKxT-woq5-Ppu0w",
    authDomain: "testexpo-da266.firebaseapp.com",
    projectId: "testexpo-da266",
    storageBucket: "testexpo-da266.appspot.com",
    messagingSenderId: "304836266552",
    appId: "1:304836266552:web:5887f207b7f9ac8e6db4cd",
    measurementId: "G-XQ9NYML1JY"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };
