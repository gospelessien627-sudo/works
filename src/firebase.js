import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXuDV2OEZ5ritHc88Eqb7vDbarD6udJAw",
  authDomain: "works-a5532.firebaseapp.com",
  projectId: "works-a5532",
  storageBucket: "works-a5532.firebasestorage.app",
  messagingSenderId: "184059685575",
  appId: "1:184059685575:web:a97613c1b71baa8cbcece2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


