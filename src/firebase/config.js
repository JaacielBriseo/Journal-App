// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCAtV2PPWkhyVHZeVpvCsnQi2Sk7k0K_qI",
  authDomain: "journalapp-ff156.firebaseapp.com",
  projectId: "journalapp-ff156",
  storageBucket: "journalapp-ff156.appspot.com",
  messagingSenderId: "814752770459",
  appId: "1:814752770459:web:3aae518f623f4a8851593e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)