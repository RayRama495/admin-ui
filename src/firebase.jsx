import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-eec8a.firebaseapp.com",
  projectId: "store-tutorial-eec8a",
  storageBucket: "store-tutorial-eec8a.appspot.com",
  messagingSenderId: "67559874802",
  appId: "1:67559874802:web:f017e5ab0ccdead3abf06b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();