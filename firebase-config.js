// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Isi data di bawah ini dari dashboard Firebase Anda
 const firebaseConfig = {
        apiKey: "AIzaSyCJE7hxrEd028dNOP0IlkKRnGzuzYMOGmo",
        authDomain: "undangan-digital-d05f6.firebaseapp.com",
        projectId: "undangan-digital-d05f6",
        storageBucket: "undangan-digital-d05f6.firebasestorage.app",
        messagingSenderId: "67545163455",
        appId: "1:67545163455:web:5e92717868a714b473c80a",
        measurementId: "G-XFXBTPVYEQ"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);