// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChN56w5H6qF9GldKe0a-lw-EL4c4rHiIc",
  authDomain: "farmacia-60b18.firebaseapp.com",
  projectId: "farmacia-60b18",
  storageBucket: "farmacia-60b18.appspot.com",
  messagingSenderId: "919200234227",
  appId: "1:919200234227:web:426fd79570a760b5f6d586"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);

export const storage = getStorage(appFirebase);

