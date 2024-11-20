// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBixWLcsQOJ1e5VLmyZvjhKzg8-zUp5beg",
  authDomain: "mountain-trekking-adventure.firebaseapp.com",
  projectId: "mountain-trekking-adventure",
  storageBucket: "mountain-trekking-adventure.firebasestorage.app",
  messagingSenderId: "925226486910",
  appId: "1:925226486910:web:2e0a63ecdddd5922501c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;