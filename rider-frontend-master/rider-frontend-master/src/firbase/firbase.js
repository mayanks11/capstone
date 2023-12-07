// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRhprJlgtp8sI52hjzsfNU_Hy1hhNPa4U",
  authDomain: "captone-4af5a.firebaseapp.com",
  projectId: "captone-4af5a",
  storageBucket: "captone-4af5a.appspot.com",
  messagingSenderId: "320128457804",
  appId: "1:320128457804:web:1b9102783fb2af83c568e9",
  measurementId: "G-QPV5BZ8ZBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);
export { app,auth};