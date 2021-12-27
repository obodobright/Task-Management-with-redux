import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDx0qvOpZIjn6RSlkpJ8eOCHzDKzLYthQA",
    authDomain: "todo-app-cb40d.firebaseapp.com",
    projectId: "todo-app-cb40d",
    storageBucket: "todo-app-cb40d.appspot.com",
    messagingSenderId: "753648582621",
    appId: "1:753648582621:web:e4b6e9607d8c785188c034",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();