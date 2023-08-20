import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvcZGOHXsiNQHSExdxOa_aoTJsJXl96AE",
  authDomain: "coderhouse-reactjs-bd.firebaseapp.com",
  projectId: "coderhouse-reactjs-bd",
  storageBucket: "coderhouse-reactjs-bd.appspot.com",
  messagingSenderId: "785352225750",
  appId: "1:785352225750:web:0adda0212eadaaef66aa77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
