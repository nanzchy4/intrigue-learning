// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh3nUCGRhsMxTSft_-248vT4yZ3UeuHxQ",
  authDomain: "intrigue-learning.firebaseapp.com",
  projectId: "intrigue-learning",
  storageBucket: "intrigue-learning.appspot.com",
  messagingSenderId: "740057401201",
  appId: "1:740057401201:web:ca574d96136ae36e0818d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;