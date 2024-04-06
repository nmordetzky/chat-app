// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, googleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZKnEmnASwODRNYk0JZny4DezzUQdeQkw",
  authDomain: "chat-app-fa46b.firebaseapp.com",
  projectId: "chat-app-fa46b",
  storageBucket: "chat-app-fa46b.appspot.com",
  messagingSenderId: "1071029681612",
  appId: "1:1071029681612:web:093bea0c3d78c07ecb3169",
  measurementId: "G-YRTJX299N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exports
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();