// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnNBplsd7CrMuc3PQiqwlIIwIdknNNqc",
  authDomain: "mil-9-con-1.firebaseapp.com",
  projectId: "mil-9-con-1",
  storageBucket: "mil-9-con-1.firebasestorage.app",
  messagingSenderId: "681633575240",
  appId: "1:681633575240:web:fdbb60ae532870b5a4c37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth