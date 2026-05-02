/* 1. Firebase Imports */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* 2. Firebase Configuration */
const firebaseConfig = {
  apiKey: "AIzaSyA4nhpU-2RAGys1u9g_Wiudquku2bBimYA",
  authDomain: "ekxtreme-aquatic.firebaseapp.com",
  projectId: "ekxtreme-aquatic",
  storageBucket: "ekxtreme-aquatic.firebasestorage.app",
  messagingSenderId: "475836775584",
  appId: "1:475836775584:web:001169a1690998ea265dc5"
};

/* 3. Initialization & Exports */
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);