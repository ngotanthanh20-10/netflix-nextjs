import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeaFT5nXoTikuiUQfU2k401esvOCw8uJE",
  authDomain: "netflix-nextjs-fbc4f.firebaseapp.com",
  projectId: "netflix-nextjs-fbc4f",
  storageBucket: "netflix-nextjs-fbc4f.appspot.com",
  messagingSenderId: "426300650952",
  appId: "1:426300650952:web:b97af83aab22fec290fcfd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
