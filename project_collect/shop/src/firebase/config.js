import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCqiBOjXixmt5tiWcp1xQpuR70tUfByPcw",
  authDomain: "shopecome-8ce7a.firebaseapp.com",
  projectId: "shopecome-8ce7a",
  storageBucket: "shopecome-8ce7a.appspot.com",
  messagingSenderId: "892532422967",
  appId: "1:892532422967:web:c14e355f02ae40151582b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
