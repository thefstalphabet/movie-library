import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA8OvPDjVMimIoxZCB3UPVG6qnnc7tkGw",
  authDomain: "movie-library-33705.firebaseapp.com",
  projectId: "movie-library-33705",
  storageBucket: "movie-library-33705.appspot.com",
  messagingSenderId: "719626460237",
  appId: "1:719626460237:web:7c8052f6bd67456dab5004",
  measurementId: "G-0FR22SGY94",
};

firebase.initilizeApp(firebaseConfig);
export default firebase;