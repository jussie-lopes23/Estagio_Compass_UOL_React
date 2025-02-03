// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAskIlWWsWPvu55wnqeUbIJPcB4l1Ezinw",
  authDomain: "desafio3-d3514.firebaseapp.com",
  projectId: "desafio3-d3514",
  storageBucket: "desafio3-d3514.firebasestorage.app",
  messagingSenderId: "554335817851",
  appId: "1:554335817851:web:d2b7c1720c6ad9758f12de",
  measurementId: "G-TNVB8SB6M6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 
export { auth, provider };

// Initialize Firebase

const analytics = getAnalytics(app);