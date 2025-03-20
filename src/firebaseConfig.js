import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Replace with your own Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDUllPnXcPqEu4Du4wwKFDDoFcEdDXs5p8",
  authDomain: "aitaskbuddy-8908c.firebaseapp.com",
  projectId: "aitaskbuddy-8908c",
  storageBucket: "aitaskbuddy-8908c.firebasestorage.app",
  messagingSenderId: "765422405339",
  appId: "1:765422405339:web:34d2f957f420fe1809eefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app; 