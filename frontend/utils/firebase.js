// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-cortex-816ba.firebaseapp.com",
  projectId: "ai-cortex-816ba",
  storageBucket: "ai-cortex-816ba.firebasestorage.app",
  messagingSenderId: "907832663312",
  appId: "1:907832663312:web:c0658f3b9cdb38cd84d995",
  measurementId: "G-VT1XZ9B38P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
setPersistence(auth, browserLocalPersistence)
export const googleProvider = new GoogleAuthProvider()