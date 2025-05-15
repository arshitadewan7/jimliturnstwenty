// Firebase App & Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC0NUL_M4erIQ-XAdpgiga9SCBtjFawkDg",
  authDomain: "jimliturnstwenty.firebaseapp.com",
  projectId: "jimliturnstwenty",
  storageBucket: "jimliturnstwenty.firebasestorage.app",
  messagingSenderId: "208642834505",
  appId: "1:208642834505:web:935636174185cb4f45ff98",
  measurementId: "G-SQ2XJXDNBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Submit note to Firestore
export async function submitNote(name, message) {
  try {
    const docRef = await addDoc(collection(db, "birthdayNotes"), {
      name: name,
      message: message,
      createdAt: new Date()
    });
    console.log("Note written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding note: ", e);
    return false;
  }
}
