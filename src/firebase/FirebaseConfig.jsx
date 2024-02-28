import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJspSqeQy7gbiRRbYeUT501J5zpJ2GfQg",
  authDomain: "e-bharat-8adff.firebaseapp.com",
  projectId: "e-bharat-8adff",
  storageBucket: "e-bharat-8adff.appspot.com",
  messagingSenderId: "789621921947",
  appId: "1:789621921947:web:ba4541ddab67e1d1c3ce3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }