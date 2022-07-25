import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4yZgQqtzywh-ppomuQtaCnVRpMa_ex10",
  authDomain: "metatechno-c54bd.firebaseapp.com",
  projectId: "metatechno-c54bd",
  storageBucket: "metatechno-c54bd.appspot.com",
  messagingSenderId: "246357616986",
  appId: "1:246357616986:web:230faaf6ea891ea4c7ab63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)