import firebase from "firebase/app";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyB69V1E-w5AJgN6ZOlfQx74ojheIXswxcI",
  authDomain: "ice-cream-bc.firebaseapp.com",
  databaseURL:
    "https://ice-cream-bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ice-cream-bc",
  storageBucket: "ice-cream-bc.appspot.com",
  messagingSenderId: "306653750068",
  appId: "1:306653750068:web:a71320c9bba003deb63b61",
  measurementId: "G-HL4RJ9KMK5"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();

// export utils/refs
export { db };
