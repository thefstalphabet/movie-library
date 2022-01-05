// Imports that we need from firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Our web app firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBigD-5Kc8T7XNJ9cCFvH3JzaIcDY1Mi8",
  authDomain: "movie-library-61aa4.firebaseapp.com",
  projectId: "movie-library-61aa4",
  storageBucket: "movie-library-61aa4.appspot.com",
  messagingSenderId: "979439936491",
  appId: "1:979439936491:web:d2c636e946031cd9d92fae",
  measurementId: "G-26NRRNR5KK",
};

// Initilalize the firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);