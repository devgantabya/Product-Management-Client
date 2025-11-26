// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3sMhOo4eKyQYej8_8b1v30UcKWTWeZMU",
  authDomain: "itemflow-1bca1.firebaseapp.com",
  projectId: "itemflow-1bca1",
  storageBucket: "itemflow-1bca1.firebasestorage.app",
  messagingSenderId: "188142040180",
  appId: "1:188142040180:web:2de3a0fb7f17939ccf0d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);