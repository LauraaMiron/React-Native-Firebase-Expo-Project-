import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6wcptbBmGCZ-Gvj6KbsSibO9hOxEBPtA",
  authDomain: "dressapp-c3a45.firebaseapp.com",
  projectId: "dressapp-c3a45",
  storageBucket: "dressapp-c3a45.appspot.com",
  messagingSenderId: "995079187899",
  appId: "1:995079187899:web:a40ed1471851ac62a4e89e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export {app,auth,createUserWithEmailAndPassword,getFirestore,setDoc,doc,signInWithEmailAndPassword};