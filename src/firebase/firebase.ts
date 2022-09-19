// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_APIKEY,
  authDomain: import.meta.env.VITE_API_AUTHDOMAIN,
  projectId: import.meta.env.VITE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_MESSAGINGSENDER,
  appId: import.meta.env.VITE_API_APPID,
  measurementId: import.meta.env.VITE_API_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app);
export {auth,db}