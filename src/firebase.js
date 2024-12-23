// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIfQMpqx_TWl5j04ilj7Cgq6o4R7X3jB4",
  authDomain: "ganntchart-48db1.firebaseapp.com",
  projectId: "ganntchart-48db1",
  storageBucket: "ganntchart-48db1.firebasestorage.app",
  messagingSenderId: "572272443640",
  appId: "1:572272443640:web:fde9abfb52c6f8f37abb0d",
  measurementId: "G-LLC281B4BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};