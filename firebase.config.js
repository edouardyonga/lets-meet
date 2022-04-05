// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeXsQ0C-M6zlr9qwkfl85Bv_BVkffc5qQ",
    authDomain: "lets-meet-811eb.firebaseapp.com",
    projectId: "lets-meet-811eb",
    storageBucket: "lets-meet-811eb.appspot.com",
    messagingSenderId: "895335604534",
    appId: "1:895335604534:web:f1459d059ae0c00c0c1397",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);