// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'


//Dev Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCAtV2PPWkhyVHZeVpvCsnQi2Sk7k0K_qI",
//   authDomain: "journalapp-ff156.firebaseapp.com",
//   projectId: "journalapp-ff156",
//   storageBucket: "journalapp-ff156.appspot.com",
//   messagingSenderId: "814752770459",
//   appId: "1:814752770459:web:3aae518f623f4a8851593e"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDDgJFSR1Rqgxfdug5-SxQzuljZudNOZMs",
  authDomain: "journaltest-7647f.firebaseapp.com",
  projectId: "journaltest-7647f",
  storageBucket: "journaltest-7647f.appspot.com",
  messagingSenderId: "555494087432",
  appId: "1:555494087432:web:00102422200dfd2ae56abd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)