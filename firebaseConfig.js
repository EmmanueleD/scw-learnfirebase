// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEzDzTILOukj98tlnVLQx8V3kNPp7wRxs",
  authDomain: "swc22-9f96e.firebaseapp.com",
  projectId: "swc22-9f96e",
  storageBucket: "swc22-9f96e.appspot.com",
  messagingSenderId: "247865147072",
  appId: "1:247865147072:web:2b2335fce749a590007725"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const auth = getAuth()

export { auth } 