// 1. Import Firebase functions we need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// 2. Your Firebase configuration (replace with your keys)
const firebaseConfig = {
  apiKey: "AIzaSyDd_1z4z1HXpyHuOTSX2Eo13M4ZvrV-6wA",
  authDomain: "stride-app-v1-e9620.firebaseapp.com",
  projectId: "stride-app-v1-e9620",
  storageBucket: "stride-app-v1-e9620.firebasestorage.app",
  messagingSenderId: "376377092237",
  appId: "1:376377092237:web:6425622e2df25f2afb1ac4",
  measurementId: "G-K97254R8XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth instance (used for login/signup)
export const auth = getAuth(app);

// ✅ Database instance (used for user data)
export const db = getFirestore(app);