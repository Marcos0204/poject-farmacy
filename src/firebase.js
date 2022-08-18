// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwaLjjOkUlo5gHvl79FHq9PMtYaU_ffY",
  authDomain: "farmacia-10afd.firebaseapp.com",
  projectId: "farmacia-10afd",
  storageBucket: "farmacia-10afd.appspot.com",
  messagingSenderId: "848806833340",
  appId: "1:848806833340:web:6b51bf8c7423c0980974b9"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);

export const storage = getStorage(appFirebase);

