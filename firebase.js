// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2-HP3PusLJ7u7qIUtXRX2Ax3FAkimWg",
  authDomain: "research-management-syst-37188.firebaseapp.com",
  projectId: "research-management-syst-37188",
  storageBucket: "research-management-syst-37188.appspot.com",
  messagingSenderId: "416695212650",
  appId: "1:416695212650:web:6c108eaf6ac67261680813"
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
