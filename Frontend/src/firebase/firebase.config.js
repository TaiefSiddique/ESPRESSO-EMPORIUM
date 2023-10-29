// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs7VPKkP4XHEeM7TrsvnhJuVJcszNBxBY",
    authDomain: "espresso-emporium-8e39e.firebaseapp.com",
    projectId: "espresso-emporium-8e39e",
    storageBucket: "espresso-emporium-8e39e.appspot.com",
    messagingSenderId: "973173716173",
    appId: "1:973173716173:web:27a7949ec9e7ca0a316584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;