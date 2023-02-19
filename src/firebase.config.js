// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmR3tmqKIO_P2YkdSCzk7X2-BQYq2Sq2w",
  authDomain: "bike-fixup-otp.firebaseapp.com",
  projectId: "bike-fixup-otp",
  storageBucket: "bike-fixup-otp.appspot.com",
  messagingSenderId: "366932670461",
  appId: "1:366932670461:web:afd9f75414b3e2e7a74b94",
  measurementId: "G-Y5YPB33QT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)