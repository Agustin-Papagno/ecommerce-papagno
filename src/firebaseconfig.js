import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNpcby1a96JzwkzZOIb0Xx6O4wNvgtNFs",
  authDomain: "proyecto-final-a613f.firebaseapp.com",
  projectId: "proyecto-final-a613f",
  storageBucket: "proyecto-final-a613f.firebasestorage.app",
  messagingSenderId: "1087506868778",
  appId: "1:1087506868778:web:aa55d6640943ddb2ec7153"
};

export const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export { db };


