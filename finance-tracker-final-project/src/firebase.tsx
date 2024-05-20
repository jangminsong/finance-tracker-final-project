import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb-H06rIy6QZ07CM6WF18Axi97WbVt8-Q",
  authDomain: "finance-tracker-final-project.firebaseapp.com",
  projectId: "finance-tracker-final-project",
  storageBucket: "finance-tracker-final-project.appspot.com",
  messagingSenderId: "736780566876",
  appId: "1:736780566876:web:fbaae738433218ec864199",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
