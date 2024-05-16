// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE7aodaqCkDwyRRLVAHvkXR4sLtqcKACw",
  authDomain: "netflixgpt-9f11c.firebaseapp.com",
  projectId: "netflixgpt-9f11c",
  storageBucket: "netflixgpt-9f11c.appspot.com",
  messagingSenderId: "48684616978",
  appId: "1:48684616978:web:df3db425af02709d4637cb",
  measurementId: "G-H9EQ6T2C7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);